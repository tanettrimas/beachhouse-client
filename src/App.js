import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <main className='container'>
        <div className="sidebar grid-component">Some sidecard</div>
        <div className="headercard grid-component">Some headercard regular</div>
        <div className="regular-dealcard grid-component">Some regular data</div>
        <div className="sushi-dealcard grid-component">Some sushi data</div>
        <div className="thai-dealcard grid-component">Some thai data</div>
        <div className="sushimenu-card grid-component">Some sushimenu data</div>
        <div className="thaimenu-card grid-component">Some thaimenu data</div>
      </main>
  );
}

export default App;
