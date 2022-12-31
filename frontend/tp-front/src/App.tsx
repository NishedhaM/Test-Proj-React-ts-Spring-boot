import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import LoginMe from './Pages/Login';
import RegisterMe from './Pages/Register';
import Welcome from './Pages/Welcome';


function App() {
  return (
    <div className="App">

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/welcome' element={<Welcome/>} />
          <Route path='/login' element={<LoginMe/>} />
          <Route path='/register' element={<RegisterMe/>} />
        </Routes>
    </div>
  );
}

export default App;
