import React, { useState } from 'react';
import {
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Button, Checkbox, Form, Input, Typography } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const Login: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                <Menu
                    // selectedKeys={[selectedMenu]}
                    mode="inline"
                    theme="dark"
                    // onClick={({ key }) => routeTo(key)}
                >
                    <Menu.Item key={''} title="Home" icon={''}>
                        Home
                    </Menu.Item>
                </Menu>
                {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} /> */}
            </Sider>
            <Layout className="site-layout">
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal">
                        {/* <Row>
                        <Col span={6}>col-6</Col>
                        <Col span={6}>col-6</Col>
                        <Col span={6}>col-6</Col>
                        <Col span={6}>col-6</Col>
                    </Row> */}
                        {/* <Menu.Item key={''} title="Home" icon={''}>
                            Home
                        </Menu.Item> */}
                        <Menu.Item key={''} title="Account" icon={''}>
                            <UserOutlined />
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout>
                        <Header style={{ background: colorBgContainer }}>
                            <Title
                                level={2}
                                style={{ fontFamily: 'cursive' }}
                            >Login Form</Title>
                        </Header>
                        <Layout>
                            <Sider style={{ background: colorBgContainer }}></Sider>
                            <Content>

                                <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                                    <Form
                                        name="basic"
                                        labelCol={{ span: 5 }}
                                        wrapperCol={{ span: 16 }}
                                        initialValues={{ remember: true }}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        autoComplete="off"
                                    >
                                        <Form.Item
                                            label="Username"
                                            name="username"
                                            style={{ fontFamily: 'cursive' }}
                                            rules={[{ required: true, message: 'Please input your username!' }]}
                                        >
                                            <Input style={{ fontFamily: 'cursive' }} />
                                        </Form.Item>

                                        <Form.Item
                                            label="Password"
                                            name="password"
                                            style={{ fontFamily: 'cursive' }}
                                            rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                            <Input.Password style={{ fontFamily: 'cursive' }} />
                                        </Form.Item>

                                        <Form.Item
                                            name="remember"
                                            valuePropName="checked"
                                            wrapperCol={{ offset: 4, span: 16 }}
                                            style={{ fontFamily: 'cursive' }}
                                        >
                                            <Checkbox style={{ fontFamily: 'cursive' }}>Remember me</Checkbox>
                                        </Form.Item>

                                        <Form.Item
                                            style={{ fontFamily: 'cursive' }}
                                            wrapperCol={{ offset: 4, span: 16 }}
                                        >
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                style={{ fontFamily: 'cursive' }}
                                            >
                                                Submit
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </Content>
                            <Sider style={{ background: colorBgContainer }}></Sider>
                        </Layout>
                        <Footer></Footer>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default Login;
