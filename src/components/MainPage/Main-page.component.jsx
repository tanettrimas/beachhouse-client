import React, { Component } from 'react';
import ChefImg from './../../assets/img/chef-cook.jpg';
import './main-page.style.css';

export const LandingPage = () => {
  return (
    <section className='grid-container'>
      <div className='left-landing-page' style={{ padding: '17rem 0' }}>
        <h1>BEACH HOUSE</h1>
        <h2>Sushi og Thai Cuisine</h2>
        <p style={{ paddingTop: '0.5rem' }}>We deliver tasteful</p>
        <p style={{ margin: '0' }}>cross-over food</p>
        <button className='card-button'>ORDER NOW</button>
      </div>
      <div className='right-landing-page' style={{ padding: '10.5rem 0' }}>
        <img src={ChefImg} alt='Beach House Sushi & Thai' />
      </div>
    </section>
  );
};
