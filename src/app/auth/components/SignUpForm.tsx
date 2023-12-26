"use client"

import {Button, Col, ConfigProvider, DatePicker, Divider, Form, Input, Row, Typography} from "antd";
import Link from "next/link";
import AuthFormHeader from "@/app/auth/components/AuthFormHeader";

export const SignUpForm = () => {
	
	
	const submitBasicAuth = (vals: any) => {
		console.log(vals)
	}
	
	return <div style={{flex: 1, minWidth: "50%"}}>
		<div className={`p-10`}>
			<AuthFormHeader/>
			<div className={"mt-4"}>
				<ConfigProvider theme={{
					components: {
						Form: {
							marginLG: 8
						}
					}
				}}>
					<Form layout={'vertical'} onFinish={submitBasicAuth}>
						<Form.Item
							label={'Email'}
							name={'email'}
							rules={[{
								required: true,
							}]}
						>
							<Input placeholder={'Email or username...'}/>
						</Form.Item>
						<Form.Item
							label={'Username'}
							name={'username'}
							rules={[{
								required: true,
							}]}
						>
							<Input placeholder={'Enter username...'}/>
						</Form.Item>
						<Row gutter={[16,16]}>
							<Col xs={24} md={24} lg={12} xl={12}>
								<Form.Item
									label={'First name'}
									name={'firstName'}
									rules={[{
										required: true,
									}]}
								>
									<Input placeholder={'Enter first name...'}/>
								</Form.Item>
							</Col>
							<Col xs={24} md={24} lg={12} xl={12}>
								<Form.Item
									label={'Last name'}
									name={'lastName'}
									rules={[{
										required: true,
									}]}
								>
									<Input placeholder={'Enter last name...'}/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={[16,16]}>
							<Col xs={24} md={24} lg={12} xl={12}>
								<Form.Item
									label={'Phone number'}
									name={'phoneNumber'}
									rules={[{
										required: true,
									}]}
								>
									<Input placeholder={'Enter phone number...'}/>
								</Form.Item>
							</Col>
							<Col xs={24} md={24} lg={12} xl={12}>
								<Form.Item
									label={'Date of birth'}
									name={'dob'}
									rules={[{
										required: true,
									}]}
								>
									<DatePicker style={{width:"100%"}} placeholder={'Select Date of birth...'}/>
								</Form.Item>
							</Col>
						</Row>
						<Form.Item
							label={'Password'}
							name={'password'}
							rules={[{
								required: true,
							}]}
						>
							<Input.Password placeholder={'Password...'}/>
						</Form.Item>
						<div className={'flex justify-between mb-2'}>
							<Link href={'/auth/reset-password'}>
								{/*<FontAwesomeIcon icon={faQuestionCircle}/>{' '}*/}
								Forgot your password?
							</Link>
							<Link href={'/auth/sign-in'}>
								Sign in
							</Link>
						</div>
						<Form.Item>
							<Button className={"mt-4"} type={"primary"} htmlType={'submit'} block>
								Sign up
							</Button>
						</Form.Item>
					</Form>
				</ConfigProvider>
			</div>
		</div>
	</div>
}