import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Mostra from './components/Mostra';
import Register from './components/Register';

import {BrowserRouter, 
  Routes,
  Route,
  Link} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div>
	<Header />
	<Routes>
	  <Route path="mostra" element={<Mostra />} />
	  <Route path="register" element={<Register />} />
	  <Route index element={<MainSection />} />
	</Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
