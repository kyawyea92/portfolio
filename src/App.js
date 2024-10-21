
import './App.css';
import BodyFunction from './menu/Body';
import FooterMenu from './menu/footer-menu';
import HeaderMenu from './menu/header-menu';

function App() {
  return (
    <div className="App font-default">
      <HeaderMenu/>
      <BodyFunction/>
      <FooterMenu/>
    </div>
  );
}

export default App;
