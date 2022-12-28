import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import FooterDown from "../Components/Footer";

const Basic = () =>{
  return (
          <div className="App">
            <Header/>
              <div><Sidebar/></div>
            <FooterDown/>
          </div>
      );
}

export default Basic;