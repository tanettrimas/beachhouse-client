import React from 'react';
import Hamburger from './../../assets/svg/hamburger.svg';
import Home from './../../assets/svg/home.svg';
import Thai from './../../assets/svg/thai.svg';
import Sushi from './../../assets/svg/sushi.svg';
import Phone from './../../assets/svg/phone.svg';
import Mail from './../../assets/svg/email.svg';

const HamburgerIcon = ({ width, height }) => {
  return (
    <>
      <img
        src={Hamburger}
        width={width}
        height={height}
        style={{ background: '#E5E5E5' }}
        alt='Hamburger Icon'
      />
    </>
  );
};

const HomeIcon = ({ width, height }) => {
  return (
    <>
      <img
        src={Home}
        width={width}
        height={height}
        style={{ background: '#E5E5E5' }}
        alt='Home Icon'
      />
    </>
  );
};

const ThaiIcon = ({ width, height }) => {
  return (
    <>
      <img
        src={Thai}
        width={width}
        height={height}
        style={{ background: '#E5E5E5' }}
        alt='Thai Food Icon'
      />
    </>
  );
};

const SushiIcon = ({ width, height }) => {
  return (
    <>
      <img
        src={Sushi}
        width={width}
        height={height}
        style={{ background: '#E5E5E5' }}
        alt='Sushi Icon'
      />
    </>
  );
};

const PhoneIcon = ({ width, height }) => {
  return (
    <>
      <img
        src={Phone}
        width={width}
        height={height}
        style={{ background: '#E5E5E5' }}
        alt='Phone Icon'
      />
    </>
  );
};

const MailIcon = ({ width, height }) => {
  return (
    <>
      <img
        src={Mail}
        width={width}
        height={height}
        style={{ background: '#E5E5E5' }}
        alt='Mail Icon'
      />
    </>
  );
};

export { HamburgerIcon, HomeIcon, ThaiIcon, SushiIcon, PhoneIcon, MailIcon };
