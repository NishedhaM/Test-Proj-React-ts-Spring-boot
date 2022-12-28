import { Typography } from 'antd';
import { Button } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';

const { Title } = Typography;

const Welcome = () => {
    return (

        <><Header className="weltag" style={{ display: 'flex', justifyContent: 'center',marginTop:250, }}>
            <Title style={{ fontFamily:'cursive'}}>Welcome to SN</Title>
            {/* <Button> Get Start!</Button> */}
        </Header>
            <Content>
                <Button style={{backgroundColor:'#090850',color:'white'}}> Get Start!</Button>
            </Content></>
    );
}

export default Welcome;