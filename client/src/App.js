import './App.css';
import { Routes, Route } from 'react-router-dom';

import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import Header from './components/nav/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
