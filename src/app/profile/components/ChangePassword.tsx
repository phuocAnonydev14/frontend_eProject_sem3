import {Button, Card, Col, Form, Input, Row, Typography} from "antd";
import {useForm} from "antd/es/form/Form";
import {useWatch} from "rc-field-form/lib";
import {useMemo} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBomb, faCheck} from "@fortawesome/free-solid-svg-icons";

export const ChangePassword = () => {
	const [form] = useForm();
	const trackedNewPassword = useWatch('newPassword', form);
	
	const passwordPolicies = useMemo(() => {
		const listPolicies = [
			{
				key: 'at-least-8-characters',
				label: 'At least 8 characters',
				isValid: false,
				regex: /^.{8,}$/
			},
			{
				key: 'at-least-1-special-characters',
				label: 'At least 1 special character (!@#$%^&*)',
				isValid: false,
				regex: /^(?=.*[!@#$%^&*]).+$/
			},
			{
				key: 'at-least-1-upper-case-letter',
				label: 'At least 1 upper case letter (A..Z)',
				isValid: false,
				regex: /^(?=.*[A-Z]).+$/
			},
			{
				key: 'at-least-1-lower-case-letter',
				label: 'At least 1 lower case letter (a..z)',
				isValid: false,
				regex: /^(?=.*[a-z]).+$/
			},
			{
				key: 'at-least-1-number',
				label: 'At least 1 number (0..9)',
				isValid: false,
				regex: /^(?=.*[0-9]).+$/
			}
		]
		if (!trackedNewPassword) return listPolicies;
		
		return listPolicies.map((policy) => {
			return ({
				...policy,
				isValid: policy?.regex.test(trackedNewPassword)
			})
		})
	}, [trackedNewPassword])
	
	return <Card>
		<Form layout={'vertical'} form={form}>
			<Row gutter={[80, 16]}>
				<Col xs={24} md={{order: 2, span: 10}} className={'d-flex align-center'}>
					<Row gutter={16}>
						<Col span={24}>
							<Typography.Paragraph className={'mb-3'} style={{fontSize: 19, lineHeight: "22px"}}>
								Password policy
							</Typography.Paragraph>
							<Typography.Paragraph style={{fontSize: 12, color: "#555"}}>
								Password must contains:
							</Typography.Paragraph>
						</Col>
						{
							passwordPolicies.map((policy) => {
								return (<Col xs={24} md={24} key={policy?.key}>
									<div className={'mb-4'}>
										<FontAwesomeIcon color={"green"}
																		 icon={policy?.isValid ? faCheck : faCheck}
										/>
										<Typography.Text
											style={{fontSize: 13}}
											className={'ml-2'}>{policy?.label}</Typography.Text>
									</div>
								</Col>)
							})
						}
					</Row>
				</Col>
				<Col xs={24} md={{order: 1, span: 12}}>
					<Typography.Title level={5}>
						<FontAwesomeIcon className={'mr-2'} icon={faCheck}/>
						Change password form</Typography.Title>
					<Form.Item
						label={'Current password'}
						name={'oldPassword'}
						rules={[
							{
								required: true,
								message: 'Please enter current password!',
							},
						]}
					>
						<Input.Password placeholder={'Current password...'}/>
					</Form.Item>
					<Form.Item
						label={'New password'}
						name={'newPassword'}
						rules={[
							{
								required: true,
								message: 'Please enter new password!',
							},
						]}
					>
						<Input.Password placeholder={'New password...'}/>
					</Form.Item>
					<Form.Item
						label={'Repeat new password'}
						name={'repeatPassword'}
						dependencies={['newPassword']}
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please confirm new password!',
							},
							({getFieldValue}) => ({
								validator(_, value) {
									if (!value || getFieldValue('newPassword') === value) {
										return Promise.resolve();
									}
									return Promise.reject(new Error('The new password that you entered do not match!'));
								},
							}),
						]}
					>
						<Input.Password placeholder={'Confirm password...'}/>
					</Form.Item>
					
					<Button block type={'primary'} htmlType={'submit'} >
						Change password
					</Button>
				</Col>
			</Row>
		</Form>
	</Card>
}