import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import SNLogo from "../Assets/logo.png";
import Home from "../Assets/icons8-home-50 3.png";

const { Header, Content, Footer, Sider } = Layout;

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
                }}
            >
                <div className="logo" />
                < img style={{marginTop:5}} src={SNLogo} alt="Image" />
                <Menu
                    style={{marginTop:'40px'}}
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}>
                    <div style={{borderTop:'1px solid #FFFFFF'}}><Menu.Item  key="1" >< img src={Home} alt="Image" />  Home</Menu.Item></div>
                    <div style={{borderTop:'1px solid #FFFFFF'}}><Menu.Item  key="2" >< img src={Home} alt="Image" />  About</Menu.Item></div>
                    <div style={{borderTop:'1px solid #FFFFFF',borderBottom:'1px solid #FFFFFF'}}><Menu.Item  key="3" >< img style={{marginLeft:3}} src={Home} alt="Image" />  Contact</Menu.Item></div>
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