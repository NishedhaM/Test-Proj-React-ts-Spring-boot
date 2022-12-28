import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import HeaderMe from '../Components/Header';
import FooterMe from '../Components/Footer';
import { Button, Checkbox, Form, Input } from 'antd';


const { Header, Content, Footer } = Layout;

const LoginMe: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <HeaderMe />
            <h1 style={{ marginTop: 100, display: 'flex', justifyContent: 'center', fontFamily: 'cursive' }}>Login Form</h1>
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

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
            <div style={{
                marginTop:117,
                
            }}><FooterMe /></div>

        </Layout>
    );
};

export default LoginMe;