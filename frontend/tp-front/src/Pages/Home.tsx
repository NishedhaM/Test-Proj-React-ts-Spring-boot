import Header from "../Components/Header";
import { Typography } from 'antd';
import { useSearchParams } from "react-router-dom";

const { Title } = Typography;

const Basic = () =>{
  const [searchparams] = useSearchParams();
  //console.log(searchparams.get("username"));
  return (
          <>
            <Header/>
            <Title>Hi {searchparams.get("username")}</Title>
          </>
      );
}

export default Basic;