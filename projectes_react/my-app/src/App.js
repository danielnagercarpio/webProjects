import logo from './logo.svg';
import './App.css';
import React from 'react';
import GridofAnimals from './components/GridOfAnimals';
import Header from './components/Header';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <Header />
      <GridofAnimals />
    </div>
  );
}

export default App;
