
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BodyFunction from './menu/Body';
import FooterMenu from './menu/footer-menu';
import HeaderMenu from './menu/header-menu';
import Blogs from './blogs/Blogs';
import SignIn from './registration/SignIn';

function App() {
  return (
    <div className="App font-default">
      
      <BrowserRouter>
      <HeaderMenu/>
        <Routes>
          <Route path='/' element={<BodyFunction/>}/>
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/logIn' element={<SignIn/>} />
        </Routes>
        <FooterMenu/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
