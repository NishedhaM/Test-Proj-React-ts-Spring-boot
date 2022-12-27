import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

const FooterDown: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{ position: 'sticky', bottom: 0, zIndex: 1, width: '100%' }}>

            </Header>


        </Layout>
    );
};

export default FooterDown;