import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import { BrowserRouter, Routes,Router, Route, Link } from "react-router-dom";
import App from './App';
import Ventes from './Ventes';
import Productes from './Productes';

const Suport = () => {
  return (
    <div className='Ventes'>
        hey ventes
      <Header/>
      <MainContent/>
    </div>
  );
}

export default Suport;
