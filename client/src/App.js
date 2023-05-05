import './App.css';
import { Routes, Route } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Header from './components/nav/Header';
import RegisterComplete from './pages/auth/RegisterComplete';

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route
          exact
          path='/register/complete'
          element={<RegisterComplete />}
        />
        <Route exact path='*' element={<h2>Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
