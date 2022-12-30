import { Layout, Typography } from 'antd';
import { Button } from 'antd';
import { Content } from 'antd/es/layout/layout';
import background from '../Assets/welcome.jpg';

const { Title } = Typography;

const Welcome = () => {
    return (
        <Layout style={{
            backgroundImage: `url(${background})`,
            height: '100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
            <Content style={{ marginTop: 250, height: '2vh' }}>
                <Title
                    style={{
                        fontSize: '10vh',
                        fontFamily: 'cursive',
                        color: 'white', display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    Welcome to SN
                </Title>
                <Button
                    style={{
                        backgroundColor: '#090850',
                        color: 'white',
                        width: 150,
                        height: 40, fontSize: 20,
                        alignContent: 'center'
                    }}
                >
                    Get Start!
                </Button>
            </Content>
        </Layout>
    );
}

export default Welcome;