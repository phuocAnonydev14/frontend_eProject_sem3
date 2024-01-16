"use client"

import {Button, ConfigProvider, Divider, Form, Input, Typography} from "antd";
import Link from "next/link";
import AuthFormHeader from "@/app/auth/components/AuthFormHeader";
import {useAppContext} from "@/app/providers/AppProvider";
import {useRouter} from "next/navigation";
import axios from "axios";

export const SignInForm = () => {
	const {setAccount} = useAppContext()
	const router = useRouter()
	
	const submitBasicAuth = async (vals: any) => {
		try{
			console.log(vals)
			const res = await axios.post("")
			setAccount(true)			
			router.push("/")
		}catch(e){
			
		}
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
							label={'Email or Username'}
							name={'username'}
							rules={[{
								required: true,
							}]}
						>
							<Input placeholder={'Email or username...'}/>
						</Form.Item>
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
							<Link href={'/auth/sign-up'}>
								Create Account
							</Link>
						</div>
						<Form.Item>
							<Button className={"mt-4"} type={"primary"} htmlType={'submit'} block>
								Sign in
							</Button>
						</Form.Item>
					</Form>
				</ConfigProvider>
			</div>
		</div>
	</div>
}