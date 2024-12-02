import React, { Component }  from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BodyFunction from './menu/Body';


import Blogs from './blogs/Blogs';
import SignIn from './registration/SignIn';
import Courses from './courses/Courses';
import BlogDetail from './blogs/BlogDetail';
import CourseInfo from './courses/CourseInfo';
import Review from './reviews/Review';
import Contact from './contact/Contact';
import Home from './home/Home';
import { RootLayout } from './RootLayout';


function App() {


  return (
    <div className="App font-default">
       
       <BrowserRouter>
      
        <Routes >
          <Route path='/' element={<RootLayout/>}>
            <Route index element={<BodyFunction/>}/>
            <Route path='/logIn' element={<SignIn/>} />
            <Route path='/companyInfo' element={<Review/>}/>
            <Route path='/contact' element={<Contact/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/blogs'>
              <Route index element={<Blogs/>}/>
              <Route path='detail/:id' element={<BlogDetail/>}/>
            </Route>
            <Route path='/courses' >
              <Route index element={<Courses/>}/>
              <Route path='info' element={<CourseInfo/>}/>
            </Route>
            </Route>
            
        </Routes>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
