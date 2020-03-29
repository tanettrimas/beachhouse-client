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
        <HamburgerIcon width='40rem' height='50rem' />
      </li>
      <li>
        <p>
          <HomeIcon width='35rem' height='50rem' /> HOME
        </p>
      </li>
      <li>
        <p>
          <ThaiIcon width='32rem' height='50rem' /> THAI FOOD
        </p>
      </li>
      <li>
        <p>
          <SushiIcon width='35rem' height='50rem' /> SUSHI
        </p>
      </li>
    </ul>
  );
};

export { SideBar };
