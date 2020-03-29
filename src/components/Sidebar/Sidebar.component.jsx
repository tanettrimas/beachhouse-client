import React from 'react';
import {
  HamburgerIcon,
  HomeIcon,
  ThaiIcon,
  SushiIcon,
} from '../Icons/Icons.component';
import './sidebar.style.css';

const SideBar = () => {
  return (
    <ul style={{ padding: '3rem 0' }}>
      <li>
        <HamburgerIcon width='30rem' height='45rem' />
      </li>
        <a href="/">
          <li className='nav-item'>
              <HomeIcon width='32rem' height='50rem' /> 
              <span>HOME</span>
          </li>
        </a>
        <a href="/">
          <li className='nav-item'>
              <SushiIcon width='32rem' height='50rem' /> 
              <span>SUSHI</span>
          </li>
        </a>
        <a href="/">
          <li className='nav-item'>
              <ThaiIcon width='32rem' height='50rem' /> 
              <span>THAI</span>
          </li>
        </a>
    </ul>
  );
};

export { SideBar };
