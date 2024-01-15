import {Button, Card, Col, DatePicker, Divider, Form, Input, message, Row, Select, Spin, Typography} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookSkull, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss"
import {ProfileAvatar} from "@/app/profile/components/ProfileAvatar";
import {useState} from "react";
export const EditUser = () => {
	
	const [loading,setLoading] = useState(false)
	
	const onFinish = async () => {
		setLoading(true)
		setTimeout(() => {
			message.success("Update profile successfully")
			setLoading(false)
		},2000)
	}
	
	return <Spin spinning={false}>
		<Card>
			<Form
				onFinish={onFinish}
				// form={form}
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
						<ProfileAvatar />
					</Col>
					<Col xs={24} lg={16} className={`${styles.info}`}>
						<Row gutter={12}>
							<Col xs={24} md={12}>
								<Form.Item
									name="email"
									label="Email"
								>
									<Typography>anonymousbigtits@gmail.com</Typography>
								</Form.Item>
							</Col>
							<Col xs={24} md={12}>
								<Form.Item
									name="phone"
									label="Phone"
									rules={[{
										pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g,
										message: "Invalid phone number"
									}]}>
									<Input bordered={false} placeholder="Enter phone number..."/>
								</Form.Item>
							</Col>
							<Col xs={24} md={12}>
								<Form.Item name="dob" label="Birthday">
									<DatePicker bordered={false} placeholder="Select date of birth"/>
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
							<Col xs={24}>
								<Form.Item name="address" label="Address">
									<Input bordered={false} placeholder="Enter address..."/>
								</Form.Item>
							</Col>
							<Col xs={24}>
								<Form.Item name="permanentAddress" label="Place of permanent">
									<Input bordered={false} placeholder={'Enter place of permanent'}/>
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