'use client';

import {
  Button,
  Col,
  ConfigProvider,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Typography,
  message,
} from 'antd';
import Link from 'next/link';
import AuthFormHeader from '@/app/auth/components/AuthFormHeader';
import axios from 'axios';

export const SignUpForm = () => {
  const submitBasicAuth = async (vals: any) => {
    console.log(vals);
    try {
      const res = await axios.post('http://localhost:65479/api/User/Register', {
        ...vals,
        rePassword: vals.password,
        avatar: 'a',
      });
      console.log(res);
      message.success('Register successfully');
    } catch (e) {
      message.error('Register failed');
      console.log(e);
    }
  };

  return (
    <div style={{ flex: 1, minWidth: '50%' }}>
      <div className={`p-10`}>
        <AuthFormHeader />
        <div className={'mt-4'}>
          <ConfigProvider
            theme={{
              components: {
                Form: {
                  marginLG: 8,
                },
              },
            }}
          >
            <Form layout={'vertical'} onFinish={submitBasicAuth}>
              <Form.Item
                label={'Email'}
                name={'email'}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder={'Email or username...'} />
              </Form.Item>
              <Form.Item
                label={'Username'}
                name={'username'}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder={'Enter username...'} />
              </Form.Item>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={24} lg={12} xl={12}>
                  <Form.Item
                    label={'First name'}
                    name={'first_name'}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder={'Enter first name...'} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={12} xl={12}>
                  <Form.Item
                    label={'Last name'}
                    name={'last_name'}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder={'Enter last name...'} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={24} lg={12} xl={12}>
                  <Form.Item
                    label={'Phone number'}
                    name={'phone'}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder={'Enter phone number...'} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={12} xl={12}>
                  <Form.Item
                    label={'Date of birth'}
                    name={'dob'}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <DatePicker
                      style={{ width: '100%' }}
                      placeholder={'Select Date of birth...'}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                label={'Password'}
                name={'password'}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.Password placeholder={'Password...'} />
              </Form.Item>
              <div className={'mb-2 flex justify-between'}>
                <Link href={'/auth/reset-password'}>
                  {/*<FontAwesomeIcon icon={faQuestionCircle}/>{' '}*/}
                  Forgot your password?
                </Link>
                <Link href={'/auth/sign-in'}>Sign in</Link>
              </div>
              <Form.Item>
                <Button
                  className={'mt-4'}
                  type={'primary'}
                  htmlType={'submit'}
                  block
                >
                  Sign up
                </Button>
              </Form.Item>
            </Form>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};
