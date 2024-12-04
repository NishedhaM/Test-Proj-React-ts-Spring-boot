import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SNLogo from '../Assets/logo.png';

const HeaderUp: React.FC = () => {
    return (
        <Layout>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['5']}>
                <Menu.Item key="1" style={{ top: 5 }}><img alt='logo' src={String(SNLogo)} /></Menu.Item>
                <Menu.Item key="2" style={{ top: 5 }}>Home1</Menu.Item>
                <Menu.Item key="3" style={{ top: 5 }}>Contact</Menu.Item>
                <Menu.Item key="4" style={{ top: 5 }}>About</Menu.Item>
                <Menu.Item key="5" style={{
                    position: "absolute",
                    right: 0, top: 15
                }}><UserOutlined /></Menu.Item>
            </Menu>
        </Layout>
    );
};

export default HeaderUp;