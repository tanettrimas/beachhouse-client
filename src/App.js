import React from 'react';
// import logo from './logo.svg';
import './App.css';
import nigiriImg from './assets/img/nigiri.png';
import springrollImg from './assets/img/springroll.png'
import chefCook from './assets/img/chef-cook.jpg'

import { SideBar } from './components/Sidebar/Sidebar.component';
import SectionContainer from './components/landingpage/SectionContainer'

function App() {
  return (
    <main className='container'>
      <div className='sidebar grid-component'>
        <SideBar />
      </div>
      <SectionContainer
          gridArea='headercard'
          description="We deliver delicious cross-over food!"
          heading='Sushi & Thai Cuisine'
          imgSrc={chefCook}
          title='Tsunami Sushi Restaurant'
          alt='Chef cooking wok'
          direction='right'
          objectFit={false}
        />
      <SectionContainer
          gridArea='regular-dealcard'
          description="If your Mac is running painfully slowly or you often get the dreaded error message, it is possible that you have used your Mac's memory to the max. Here are six methods that can help you check and free up your Mac's memory. Go through the following article to find the one that works for you."
          heading='Appetizer'
          imgSrc={springrollImg}
          title='Complement your meal'
          alt='Springroll'
          direction='left'
        />
      <SectionContainer
          gridArea='sushi-dealcard'
          description="If your Mac is running painfully slowly or you often get the dreaded error message, it is possible that you have used your Mac's memory to the max. Here are six methods that can help you check and free up your Mac's memory. Go through the following article to find the one that works for you."
          heading='Appetizer'
          imgSrc={nigiriImg}
          title='Sushi & Maki'
          alt='Nigiri'
          direction='right'
        />
      <div className='thai-dealcard grid-component'>Some thai data</div>
      <div className='sushimenu-card grid-component'>Some sushimenu data</div>
      <div className='thaimenu-card grid-component'>Some thaimenu data</div>
    </main>
  );
}

export default App;
