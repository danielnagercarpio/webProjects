import logo from './logo.png';
import './App.css';
import './MainPage.css';

import IndexPage from './IndexPage';
import Login from './Login';
import Register from './Register';
import ShoppingHistory from './ShoppingHistory';

import { BrowserRouter, Routes,Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <div className='clipath-green-afable'></div>
        <div className='clipath'></div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexPage />}/>
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="ShoppingHistory" element={<ShoppingHistory />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
