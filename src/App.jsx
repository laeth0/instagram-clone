import * as React from 'react';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Messages from './Pages/Messages';
import Profile from './Pages/Profile';
import PageNotFound from './Pages/PageNotFound';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import MainHome from "./Pages/MainHome"




export default function App() {



  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<MainHome />} >
          <Route index element={<Home />} />
          <Route path='/Explore' element={<Explore />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Messages' element={<Messages />} />
        </Route>
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='*' element={<PageNotFound />} /> 
      </Routes>
    </BrowserRouter>
  );
}

