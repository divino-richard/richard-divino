import React from 'react';
import './Header.css';
import Socials from './Socials';
import animationData from '../../assets/dev2.json';
import { Player } from '@lottiefiles/react-lottie-player';

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello, I'm</h5>
            <h1>Richard Divino</h1>
            <h5 className='text-light'>Full Stack Developer</h5>
            
            <Socials/>

           <div className='animation__container'>
                <Player className='animation__item'
                    autoplay
                    loop
                    src={animationData}
                    >
                </Player>
            </div>

            <a className='scroll__down' href="#contact">Scroll</a>
        </div>
    </header>
  );
}

export default Header;