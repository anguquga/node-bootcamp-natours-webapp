import React from 'react';

import logoNatours from '../../assets/img/logo-white.png';

//import classes from './Logo.module.css';

const logo = (props) => (
  <div className="header__logo">
    <img src={logoNatours} alt="Natours logo" />
  </div>
);

export default logo;
