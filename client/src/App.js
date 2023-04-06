import './App.css';
import { Routes, Route } from 'react-router-dom';

import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
    </Routes>
  );
}

export default App;
