import React from 'react';
// import logo from './logo.svg';
import './App.css';
import nigiriImg from './img/nigiri.jpg'
import NigiriComponent from './components/landingpage/nigiri'


function App() {
  return (
      <main className='container'>
        <div className="sidebar grid-component">Some sidecard</div>
        <div className="headercard grid-component">Some headercard regular</div>
        <NigiriComponent
          description="If your Mac is running painfully slowly or you often get the dreaded error message, it is possible that you have used your Mac's memory to the max. Here are six methods that can help you check and free up your Mac's memory. Go through the following article to find the one that works for you."
          heading="Appetizer"
          imgSrc={nigiriImg}
          title="Sushi & Maki"
        />
        <div className="sushi-dealcard grid-component">Some sushi data</div>
        <div className="thai-dealcard grid-component">Some thai data</div>
        <div className="sushimenu-card grid-component">Some sushimenu data</div>
        <div className="thaimenu-card grid-component">Some thaimenu data</div>
      </main>
  );
}

export default App;
