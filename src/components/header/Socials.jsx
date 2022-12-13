import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';

const Socials = () => {
  return (
    <div className='header__socials'>
       <a href="https://www.linkedin.com/in/richard-divino-b99136210/" target='_blank'><BsLinkedin/></a>
       <a href="https://github.com/divino-richard" target='_blank'><BsGithub/></a>
    </div>
  );
}

export default Socials;