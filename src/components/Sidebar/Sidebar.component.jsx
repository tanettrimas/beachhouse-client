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
        <HamburgerIcon width='35rem' height='50rem' />
      </li>
      <li className='nav-item'>
          <HomeIcon width='35rem' height='50rem' />
          <p>HOME</p>
      </li>
      <li className='nav-item'>
      <ThaiIcon width='35rem' height='50rem' />
        <p>
          THAI
        </p>
      </li>
      <li className='nav-item'>
      <SushiIcon width='35rem' height='50rem' />
        <p>
           SUSHI
        </p>
      </li>
    </ul>
  );
};

export { SideBar };
