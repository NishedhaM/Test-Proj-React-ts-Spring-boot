import React from 'react';
import { Layout, Space } from 'antd';
import HeaderMe from '../Components/Header';
import FooterMe from '../Components/Footer';
import { Button, Form, Input } from 'antd';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

const { Text, Title } = Typography;

const { Content } = Layout;

const RegisterMe: React.FC = () => {
    const onFinish = (values: any) => {
        // console.log('Success:', values);
        axios.post('/users', {
            name: values.username,
            password: values.password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout>
            <HeaderMe />
            <Title
                style={{
                    marginTop: 100,
                    display: 'flex',
                    justifyContent: 'center',
                    fontFamily: 'cursive'
                }}
            >
                Registration Form
            </Title>
            <Content
                className="site-layout"
                style={{
                    padding: '0 50px',
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 40
                }}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="ConfirmPassword"
                        name="ConfirmPassword"
                        rules={[{ required: true, message: 'Please confirm your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{
                                backgroundColor: '#090850',
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
            <Space direction='vertical'>
                <Text>Already have an account?
                    <Link to={'/login'}>Login</Link>
                </Text>
            </Space>
            <div style={{
                marginTop: 129,
            }}><FooterMe />
            </div>
        </Layout>
    );
};

export default RegisterMe;