import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import LoginMe from './Pages/Login';
import RegisterMe from './Pages/Register';
import Welcome from './Pages/Welcome';
import CArtical from './Pages/CArticle';

function App() {
  return (
    <div className="App">

        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/' element={<Welcome/>} />
          <Route path='/login' element={<LoginMe/>} />
          <Route path='/register' element={<RegisterMe/>} />
          <Route path='/article' element={<CArtical/>} />
        </Routes>
       
    </div>
  );
}

export default App;
