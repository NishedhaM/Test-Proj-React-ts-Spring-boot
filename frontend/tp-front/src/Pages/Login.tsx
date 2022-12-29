import React from 'react';
import { Layout, Space } from 'antd';
import HeaderMe from '../Components/Header';
import FooterMe from '../Components/Footer';
import { Button, Form, Input } from 'antd';
import { Typography } from 'antd';

const { Text, Link,Title } = Typography;

const { Content } = Layout;

const LoginMe: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout>
            <HeaderMe />
            <Title style={{ marginTop: 100, display: 'flex', justifyContent: 'center', fontFamily: 'cursive' }}>Login Form</Title>
            <Content className="site-layout" style={{ padding: '0 50px', display: 'flex', justifyContent: 'center', marginTop: 40 }}>
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
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{
                                backgroundColor: '#090850',
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
            <Space direction='vertical'>
                <Text>Don't you have an account?<Link href="https://ant.design" target="_blank">SignUp</Link></Text>
            </Space>
            <Space direction='vertical'>
                <Link href="https://ant.design" target="_blank">Forgot Password?</Link>
            </Space>
            <div style={{
                marginTop: 110,
            }}>
                <FooterMe />
            </div>
        </Layout>
    );
};

export default LoginMe;