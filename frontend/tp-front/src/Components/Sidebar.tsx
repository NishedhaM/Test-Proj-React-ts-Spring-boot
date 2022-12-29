import React from 'react';
import { Layout, Menu, theme } from 'antd';
import SNLogo from "../Assets/logo.png";
import { HomeOutlined, PhoneOutlined, InfoCircleOutlined } from '@ant-design/icons';

const { Content, Sider } = Layout;

const Sidebar: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}>
                < img style={{ marginTop: 5 }} src={SNLogo} alt="logo" />
                <Menu
                    style={{ marginTop: '40px' }}
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}>
                        <div style={{ 
                            borderTop: '1px solid #FFFFFF' }}>
                            <Menu.Item key="1" ><HomeOutlined />  Home</Menu.Item>
                        </div>
                        <div style={{
                            borderTop: '1px solid #FFFFFF'}}>
                            <Menu.Item key="2" ><InfoCircleOutlined />  About</Menu.Item>
                        </div>
                        <div style={{
                            borderTop: '1px solid #FFFFFF',
                            borderBottom: '1px solid #FFFFFF'}}>
                            <Menu.Item key="3" ><PhoneOutlined />  Contact</Menu.Item>
                        </div>
                </Menu>
            </Sider>
            <Layout>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, minHeight: 503, background: colorBgContainer }}>content</div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Sidebar;