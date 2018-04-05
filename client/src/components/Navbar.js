import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.css';
import logo from '../assets/logo.png';
import image from '../assets/image.jpg';


const Navbar = () => {
  return(
  <div className={styles.navbar}>
    <img className={styles.icon} src={logo} alt="logo" />
    <img className={styles.image} src={image} alt="image"/>
    <NavLink className={styles.link} to='/help'>Help</NavLink>
    <NavLink className={styles.link} to='/account'>Account</NavLink>
  </div>
  )
}

export default Navbar;
