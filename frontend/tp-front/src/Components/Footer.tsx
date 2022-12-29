import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const FooterDown: React.FC = () => {

    return (
        <Layout>
            <Header style={{ position: 'sticky', bottom: 0, zIndex: 1, width: '100%' }}>
            </Header>
        </Layout>
    );
};

export default FooterDown;