import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import styles from '../styles/Footer.css';

const Footer = () => {
  return(
  <div className={styles.footer}>
    <img className={styles.icon} src={logo} alt="logo" />
    <NavLink className={styles.link} to='/help'>Terms</NavLink>
    <NavLink className={styles.link} to='/account'>Privacy</NavLink>
    <NavLink className={styles.link} to='/help'>Sitemap</NavLink>
  </div>

  )
}

export default Footer;
