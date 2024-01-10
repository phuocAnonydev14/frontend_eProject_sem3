"use client"

import {Avatar, Button, Card, Col, Form, Input, Layout, Progress, Row, Typography, Image, Select, Empty} from "antd";
import {useForm} from "antd/es/form/Form";
import {memo, useCallback, useRef, useState} from "react";
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
import {MinusIcon} from "lucide-react";
import {convertBlobToFile, handleCreateFolder} from "@/lib/utils";
import axios from "axios";

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
	
	const handleFinish = async (values: any) => {
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
								<UploadUi/>
							</div>
						</Col>
						<Col xs={24} md={24} lg={10} xl={10}>
							<div style={{paddingLeft: "10px"}}>
								<Typography.Title level={3}>Checkout information</Typography.Title>
								<Form.Item label={"Full name"} name={"fullName"}>
									<Input placeholder={"Enter full name..."}/>
								</Form.Item>
								<Form.Item label={"Address"} name={"address"}>
									<Input placeholder={"Enter address..."}/>
								</Form.Item>
								<Form.Item label={"Phone number"} name={"phoneNumber"}>
									<Input placeholder={"Enter phone number..."}/>
								</Form.Item>
								
								<PaymentForm/>
							</div>
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
	
	const abortItem = useAbortItem();
	// const retry = useRetry();
	
	useItemProgressListener((item) => {
		setPercent(item.completed);
	}, id);
	
	const handleUploadFile = async () => {
		convertBlobToFile(url).then(async (file) => {
			if (file) {
				try {
					console.log("Converted file:", file);
					// Bạn có thể thực hiện các hành động khác với file ở đây
					const formData = new FormData();
					formData.append("files", file)
					formData.append("files", file)
					const res = await axios.post('/api/upload', formData)
					console.log({res})
				} catch (e) {
					console.log(e)
				}
			} else {
				console.log("Failed to convert blob to file.");
			}
		});
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
	
	// const onRetry = useCallback(() => {
	// 	retry(id);
	// }, [retry, id]);
	
	return (
		<Col xs={8} md={12} lg={8} xl={8}>
			
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
							// handleRemoveImage(id)
							// await handleCreateFolder('test')
							await handleUploadFile()
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
								<Select defaultValue={"lg"} style={{minWidth: "100px"}}
												options={[{value: "xl", label: "3x4"}, {value: "md", label: "3x4"}, {
													value: "lg",
													label: "3x4"
												}, {value: "xs", label: "3x4"},]}/>
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

const UploadUi = () => {
	const previewMethodsRef = useRef<any>();
	const [previews, setPreviews] = useState([]);
	
	console.log(previews)
	
	const onClearPreviews = useCallback(() => {
		previewMethodsRef.current?.clear();
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


