import React, { Component } from 'react';
import ChefImg from './../../assets/img/chef-cook.jpg';
import './main-page.style.css';

export const LandingPage = () => {
  return (
    <section className='grid-container'>
      <div className='left-landing-page' style={{ padding: '22.5rem 0' }}>
        <h1>BEACH HOUSE</h1>
        <h2>Sushi og Thai Cuisine</h2>
        <p>We deliver tasteful cross-over food</p>
      </div>
      <div className='right-landing-page' style={{ padding: '10.5rem 0' }}>
        <img src={ChefImg} alt='Beach House Sushi & Thai' />
      </div>
    </section>
  );
};
