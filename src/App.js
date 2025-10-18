import React from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import Footer from './components/Footer';
import GridOverlay from './components/GridOverlay';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Feed />
      <GridOverlay />
    </div>
  );
}

export default App;
