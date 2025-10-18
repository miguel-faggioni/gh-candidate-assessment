import React from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Feed />
      <Footer />
    </div>
  );
}

export default App;
