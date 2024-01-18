import {Button, Card, Col, DatePicker, Divider, Form, Input, message, Row, Select, Spin, Typography} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookSkull, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss"
import {ProfileAvatar} from "@/app/profile/components/ProfileAvatar";
import {useEffect, useState} from "react";
import {useForm} from "antd/es/form/Form";
import {useAppContext} from "@/app/providers/AppProvider";
import axios from "axios";
import {API_URL} from "@/constant/env";

export const EditUser = () => {
	
	const [loading, setLoading] = useState(false)
	const [form] = useForm()
	const {account} = useAppContext()
	
	useEffect(() => {
		console.log(account)
		account && form.setFieldsValue(account)
	}, [account]);
	
	const onFinish = async (values: any) => {
		try {
			setLoading(true)
			await axios.put(`${API_URL}/User/${account.id}`, {...values, id: account.id}, {
				headers: {
					Authorization: `Bearer ${account.token}`
				}
			})
			message.success("Update profile successfully")
		} catch (e) {
			message.error("Update profile failed")
		} finally {
			setLoading(false)
		}
	}
	
	return <Spin spinning={false}>
		<Card>
			<Form
				onFinish={onFinish}
				form={form}
				labelCol={{flex: '128px'}}
				labelAlign="left"
				labelWrap
			>
				<div className={'flex justify-between'}>
					<div>
						<Typography.Title level={5} className={'mb-0'}>
							<FontAwesomeIcon className={'mr-2'} icon={faPenToSquare}/>
							Personal profile
						</Typography.Title>
						<Typography.Paragraph className={'mb-3'}>
							View and update your personal profile here.
						</Typography.Paragraph>
					</div>
					<Button
						loading={loading}
						type={'primary'}
						htmlType={'submit'}
						icon={<FontAwesomeIcon icon={faPenToSquare}/>}
					>
						Save changes
					</Button>
				</div>
				<Row gutter={16}>
					<Col xs={24} lg={8}>
						{/*<AccountProfileAvatar/>*/}
						<ProfileAvatar/>
					</Col>
					<Col xs={24} lg={16} className={`${styles.info}`}>
						<Row gutter={12}>
							<Col xs={24} md={12}>
								<Form.Item
									name="email"
									label="Email"
								>
									<Input bordered={false} placeholder="Enter  email..."/>
								</Form.Item>
							</Col>
							<Col xs={24} md={12}>
								<Form.Item
									name="username"
									label="Username"
								>
									<Input bordered={false} placeholder="Enter  username..."/>
								</Form.Item>
							</Col>
							<Col xs={24} md={12}>
								<Form.Item
									name="phone"
									label="Phone"
									>
									<Input bordered={false} placeholder="Enter phone number..."/>
								</Form.Item>
							</Col><Col xs={24} md={12}>
							<Form.Item
								name="first_name"
								label="First name"
							>
								<Input bordered={false} placeholder="Enter first name..."/>
							</Form.Item>
						</Col><Col xs={24} md={12}>
							<Form.Item
								name="last_name"
								label="Last name"
							>
								<Input bordered={false} placeholder="Enter last name..."/>
							</Form.Item>
						</Col>
							<Col xs={24} md={12}>
								<Form.Item name="gender" label={"Gender"}>
									<Select bordered={false} placeholder="Enter gender">
										<Select.Option value="MALE">Male</Select.Option>
										<Select.Option value="FEMALE">Female</Select.Option>
										<Select.Option value="OTHER">Other</Select.Option>
									</Select>
								</Form.Item>
							</Col>
							<Col xs={24} md={12}>
								<Form.Item name="address" label="Address">
									<Input bordered={false} placeholder="Enter address..."/>
								</Form.Item>
							</Col>
						</Row>
					</Col>
				</Row>
				<Divider className={'my-2'}/>
				<Typography.Title level={5} className={'mb-0'}>
					<FontAwesomeIcon className={'mr-2'} icon={faBookSkull}/>
					Education
				</Typography.Title>
				<Typography.Paragraph className={'mb-3'}>
					View and update information about education here.
				</Typography.Paragraph>
			</Form>
		</Card>
	</Spin>
}