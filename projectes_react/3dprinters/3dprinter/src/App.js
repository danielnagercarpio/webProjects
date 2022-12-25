import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import { BrowserRouter, Routes,Router, Route, Link } from "react-router-dom";
import Ventes from './Ventes';
import Productes from './Productes';
import Suport from './Suport';
function App() {
  return (
    <div className='App'>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainContent/>}/>
            <Route path="Ventes" element={<Ventes />} />
            <Route path="Register" element={<Productes />} />
            <Route path="ShoppingHistory" element={<Suport />} />
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
