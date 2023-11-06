import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';
import Login from './pages/Login';

export const UserContext = createContext()

function App() {
  const [userState, setUserState] = useState({})
  const user = {userName: 'johndoe@gmail.com', 
                accountType: 'admin', 
                _id: '1355938535859'}
  return (

    <BrowserRouter>
    <UserContext.Provider value = {{userState, setUserState}}>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    <h2> This is App </h2>
    <Header />
    <Footer />
    </UserContext.Provider>
    </BrowserRouter>
    
  
  );
}

export default App;
