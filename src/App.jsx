import * as React from 'react';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Messages from './Pages/Messages';
import Profile from './Pages/Profile';
import PageNotFound from './Pages/PageNotFound';
import Sign from './Pages/Sign';
import MainHome from "./Component/MainHome";




export default function App() {



  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<MainHome />} >
          <Route index element={<Home />} />
          <Route path='/Explore' element={<Explore />} />
          <Route path='/Profile/:username' element={<Profile />} />
          <Route path='/Messages' element={<Messages />} />
        </Route>
        <Route path='/Sign' element={<Sign />} />
        <Route path='*' element={<PageNotFound />} /> 
      </Routes>
    </BrowserRouter>
  );
}

