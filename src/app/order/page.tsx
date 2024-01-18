"use client"

import {
	Avatar,
	Button,
	Card,
	Col,
	Form,
	Input,
	Layout,
	Progress,
	Row,
	Typography,
	Image,
	Select,
	Empty,
	Divider, message
} from "antd";
import {useForm} from "antd/es/form/Form";
import {memo, useCallback, useContext, useEffect, useRef, useState} from "react";
import {
	CloseOutlined,
	CloudUploadOutlined,
	DeleteOutlined,
	MinusOutlined,
	PlusOutlined,
	RedoOutlined,
	StopOutlined
} from "@ant-design/icons";
import {
	composeEnhancers, Uploady,
	useAbortItem,
	useItemAbortListener,
	useItemFinalizeListener,
	useItemProgressListener
} from "@rpldy/uploady";
import {retryEnhancer, useRetry} from "@rpldy/retry-hooks";
import {getMockSenderEnhancer} from "@rpldy/mock-sender";
import UploadPreview from "@rpldy/upload-preview";
import {asUploadButton} from "@rpldy/upload-button";
import PaymentForm from "@/app/order/components/CreditCard";
import {convertBlobToFile, handleCreateFolder, stringToHash} from "@/lib/utils";
import axios from "axios";
import {awaitExpression} from "@babel/types";
import {IOrder, useOrderContext} from "@/app/order/components/OrderProvider";
import {useAppContext} from "@/app/providers/AppProvider";
import {API_URL} from "@/constant/env";
// import bcrypt from "bcrypt"
const mockEnhancer = getMockSenderEnhancer({delay: 2000});
const enhancer = composeEnhancers(retryEnhancer, mockEnhancer);
// const enhancer = composeEnhancers(mockEnhancer);
const STATES = {
	PROGRESS: "PROGRESS",
	DONE: "DONE",
	ABORTED: "ABORTED",
	ERROR: "ERROR"
};

const isItemError = (state: any) =>
	state === STATES.ABORTED || state === STATES.ERROR;

export default function Order() {
	const [form] = useForm()
	const {setOrder, order} = useOrderContext()
	const [orderItems, setOrderItems] = useState<any>([])
	const [loading, setLoading] = useState(false)
	const {account} = useAppContext()
	
	
	const handleFinish = async (values: any) => {
		// setLoading(true)
		let orderPayload: IOrder = {...order} as IOrder
		if (!orderPayload.credit_cvv || !orderPayload.credit_number || orderPayload.order_items.length === 0 || !values.fullName) {
			return message.error("Please fill in all requirement")
		}
		
		let orderItemConverted = []
		await Promise.all(
			orderPayload.order_items.map(async ({url, size, quantity}) => {
				const file = await convertBlobToFile(url as string)
				orderItemConverted.push(file)
			})
		)
		
		const hashedCreditNumber = stringToHash(orderPayload.credit_number).toString()
		let total = 0
		orderPayload.order_items.forEach(item => {
			total += item.quantity
		})
		try {
			// Bạn có thể thực hiện các hành động khác với file ở đây
			const formData = new FormData();
			orderItemConverted.forEach(item => {
				formData.append("files", item)
			})
			const res = (await axios.post('/api/upload', formData)).data
			let orderRequest = {
				credit_number: hashedCreditNumber,
				...values,
				status: "0",
				total,
				payment_type: "banking",
				payment_status: "success",
				credit_cvv: orderPayload.credit_cvv,
				folder_name: res.folder,
				order_items: orderPayload.order_items.map((item, index) => ({
					image: orderItemConverted[index],
					quantity: item.quantity,
					size: item.size
				}))
			}
			
			const newOrderRes = await axios.post(`${API_URL}/Order`, {
				userId: account.id,
				phone_number: values.phoneNumber,
				address: values.address,
				full_name: values.fullName,
				folder_name: res.folder,
				total: total,
				status: 0,
				payment_type: "banking",
				payment_status: "success",
				credit_number: hashedCreditNumber,
				credit_cvv: orderPayload.credit_cvv,
			})
			
			const orderList = await axios.get(`${API_URL}/Order`)
			const currentOrder = orderList.data.find(item => item.credit_number === hashedCreditNumber)
			
			await Promise.all(
				orderPayload.order_items.map(async (item, index) => {
					const newOrderItemRes = await axios.post(`${API_URL}/Order_Item`, {
						image: res.files[index],
						quantity: item.quantity,
						sizeId: item.size,
						orderId: currentOrder.id
					})
					console.log({newOrderItemRes})
				})
			)
			console.log({res})
			message.success("Order successfully")
			form.resetFields()
			
		} catch (e) {
			console.log(e)
		} finally {
			setLoading(false)
		}
		
		return
	}
	
	
	return <div className={"px-5"} suppressHydrationWarning>
		<Card>
			<Typography.Title>Orders</Typography.Title>
			<Typography.Text>Upload your order & we will process it with excellent service</Typography.Text>
		</Card>
		<div className={"mt-4"}>
			<Uploady enhancer={enhancer}>
				<Form layout={"vertical"} onFinish={handleFinish} form={form}>
					<Row gutter={[16, 16]}>
						<Col xs={24} md={24} lg={14} xl={14}>
							<div>
								<UploadUi setOrderItems={setOrderItems}/>
							</div>
						</Col>
						<Col xs={24} md={24} lg={10} xl={10}>
							<div style={{paddingLeft: "10px"}}>
								<Typography.Title level={3}>Checkout information</Typography.Title>
								<Form.Item label={"Full name"} name={"fullName"} rules={[{required: true}]}>
									<Input placeholder={"Enter full name..."}/>
								</Form.Item>
								<Form.Item label={"Address"} name={"address"} rules={[{required: true}]}>
									<Input.TextArea placeholder={"Enter address..."}/>
								</Form.Item>
								<Form.Item label={"Phone number"} name={"phoneNumber"} rules={[{required: true}]}>
									<Input placeholder={"Enter phone number..."}/>
								</Form.Item>
								<PaymentForm/>
							</div>
							<Divider/>
							<div className={'flex justify-between items-center'}>
								<Typography.Title level={5}>Total:</Typography.Title>
								<Typography.Title level={5}>{(() => {
									let total = 0
									order.order_items.map(item => {
										total += item.quantity
									})
									return total
								})()}</Typography.Title>
							</div>
							<div className={'flex justify-between items-center'}>
								<Typography.Title level={5}>Price:</Typography.Title>
								<Typography.Title level={5}>{new Intl.NumberFormat('vi-VN', {
									style: 'currency',
									currency: 'VND'
								}).format((() => {
									let total = 0
									order.order_items.map(item => {
										total += (+item.price * +item.quantity)
									})
									return total
								})())}</Typography.Title>
							</div>
							<Button loading={loading} htmlType={"submit"} onClick={handleFinish} className={"my-4"} type={"primary"}
											block>Checkout</Button>
						</Col>
					</Row>
				</Form>
			</Uploady>
		</div>
	</div>
}


const PreviewCard = memo((props: { id: any, url: any, name: any, setPreviews: any, handleRemoveImage: any }) => {
	const [percent, setPercent] = useState(0);
	const [itemState, setItemState] = useState(STATES.PROGRESS);
	const {id, url, name, setPreviews, handleRemoveImage} = props
	const [quantities, setQuantities] = useState(1)
	const [selectedSize, setSelectedSize] = useState(1)
	const {setOrder, order, sizes} = useOrderContext()
	
	const abortItem = useAbortItem();
	// const retry = useRetry();
	
	useItemProgressListener((item) => {
		setPercent(item.completed);
	}, id);
	
	const handleUploadFile = async () => {
	
	}
	
	
	useItemFinalizeListener((item) => {
		setItemState(
			item.state === "finished"
				? STATES.DONE
				: item.state === "aborted"
					? STATES.ABORTED
					: STATES.ERROR
		);
	}, id);
	
	useItemAbortListener(() => {
		setItemState(STATES.ABORTED);
	}, id);
	
	const onAbort = useCallback(() => {
		abortItem(id);
	}, [abortItem, id]);
	
	useEffect(() => {
		const updatedOrderItem = order.order_items.map(order => {
			console.log(selectedSize, sizes)
			console.log(sizes.find(item => +selectedSize === item.id))
			
			if (order.url === url) {
				return {
					url, size: +selectedSize,
					quantity: quantities,
					price: +sizes.find(item => +selectedSize === item.id)?.price
				}
			} else {
				return order
			}
		})
		
		
		setOrder(state => ({...state, order_items: updatedOrderItem}))
	}, [quantities, selectedSize]);
	
	return (
		<Col xs={8} md={12} lg={8} xl={8} key={id}>
			
			<Card
				hoverable
				// style={{width: 240}}
				cover={<Image alt="example" src={url} style={{objectFit: "cover", height: "300px"}}/>}
				actions={[
					<div>
						<Button
							key="stop"
							icon={<MinusOutlined/>}
							onClick={() => {
								if (quantities > 1) {
									setQuantities(prevState => prevState - 1)
								}
							}}
							// disabled={itemState !== STATES.PROGRESS}
							type="link"
						
						/>
						<Typography.Text>{quantities}</Typography.Text>
						<Button
							key="stop"
							icon={<PlusOutlined/>}
							onClick={() => {
								setQuantities(prevState => prevState + 1)
							}}
							// disabled={itemState !== STATES.PROGRESS}
							type="link"
						/>
					</div>,
					<Button
						key="retry"
						icon={<CloseOutlined/>}
						onClick={async () => {
							setOrder(state => ({...state, order_items: order.order_items.filter(item => item.url !== url)}))
							handleRemoveImage(id)
							// await handleCreateFolder('test')
							// await handleUploadFile()
						}}
						// disabled={!isItemError(itemState)}
						type="link"
					/>
				]}
			>
				<Card.Meta
					title={name}
					description={
						<div className={'flex justify-between'}>
							<Progress
								type="dashboard"
								percent={percent}
								width={66}
								strokeColor={
									isItemError(itemState)
										? "#FF4D4F"
										: {
											"0%": "#108ee9",
											"100%": "#87d068"
										}
								}
								status={isItemError(itemState) ? "exception" : undefined}
							/>
							<div>
								<Typography.Title level={5}>Size:</Typography.Title>
								<Select
									style={{minWidth: "100px"}}
									options={sizes.map(size => ({value: size.id, label: size.name}))}
									value={selectedSize}
									onChange={(size) => setSelectedSize(size)}
								/>
							</div>
						</div>
					}
				/>
			</Card>
		</Col>
	
	);
});

const UploadPreviewCards = ({previewMethodsRef, setPreviews}: any) => {
	
	const handleRemoveImage = (id: string) => {
		return previewMethodsRef.current.removePreview(id)
	}
	
	const getPreviewProps = useCallback(
		(item: any) => ({id: item.id, name: item.file.name, setPreviews, handleRemoveImage}),
		[]
	);
	
	return (
		<Row gutter={[16, 14]} className="preview-row">
			<UploadPreview
				previewComponentProps={getPreviewProps}
				// @ts-ignore
				PreviewComponent={PreviewCard}
				onPreviewsChanged={setPreviews}
				previewMethodsRef={previewMethodsRef}
				rememberPreviousBatches
			/>
		</Row>
	);
};

const UploadButton = asUploadButton(Button);

const UploadUi = ({setOrderItems}: any) => {
	const previewMethodsRef = useRef<any>();
	const [previews, setPreviews] = useState([]);
	const {setOrder, order, sizes} = useOrderContext()
	
	
	useEffect(() => {
		if (previews.length > 0) {
			setOrder(state => ({
				...state,
				order_items: [...state.order_items, {
					url: previews[previews.length - 1].url,
					size: 1,
					quantity: 1,
					price: +sizes[0].price
				}],
				total: previews.length,
				
			}))
		}
	}, [previews]);
	
	const onClearPreviews = useCallback(() => {
		previewMethodsRef.current?.clear();
		setOrder(state => ({...state, order_items: []}))
	}, [previewMethodsRef]);
	
	return (
		<div>
			<Typography.Title level={3}>Upload your image</Typography.Title>
			<div className={'flex gap-3 mb-4'}>
				<UploadButton
					key="upload-button"
					extraProps={{
						type: "primary",
						size: "large",
						icon: <CloudUploadOutlined/>
					}}
				/>
				<Button
					key="clear-button"
					icon={<DeleteOutlined/>}
					size="large"
					disabled={!previews.length}
					onClick={onClearPreviews}
				>
					Clear
				</Button>
			</div>
			<div>
				{previews.length === 0
					&& <Empty className={"mt-20"} description={"Upload your avatar"}/>
				}
				<UploadPreviewCards
					setPreviews={setPreviews}
					previewMethodsRef={previewMethodsRef}
				/>
			</div>
		</div>
	);
};


