import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import SNLogo from '../Assets/logo.png';
import Profile from '../Assets/profile.png';
const { Header, Content, Footer } = Layout;

const HeaderUp: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>

                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['5']}>
                    <Menu.Item key="1" style={{top:5}}>< img src={SNLogo} alt="Image" /></Menu.Item>
                    <Menu.Item key="2" style={{top:5}}>Home</Menu.Item>
                    <Menu.Item key="3" style={{top:5}}>Contact</Menu.Item>
                    <Menu.Item key="4" style={{top:5}}>About</Menu.Item>
                    <Menu.Item key="5" style={{position: "absolute",
                        right: 0,top:15}}><img src={Profile} alt="Image" /></Menu.Item>



                </Menu>



        </Layout>
    );
};

export default HeaderUp;