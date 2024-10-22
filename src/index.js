import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Blogs from './blogs/Blogs';
import SignIn from './registration/SignIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/logIn' element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

