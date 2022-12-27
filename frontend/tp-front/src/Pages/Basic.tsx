import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import FooterDown from "../Components/Footer";

function App() {
  return (
      <div className="App">
        <Header/>
          <div><Sidebar/></div>
        <FooterDown/>
      </div>
  );
}

export default App;