import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.css'


class NavBar extends Component {
  render(){
    return(
      <nav styles={styles.navbar}>
      <div className='navbar'>
        <img src='../../assets/logo.png' />
        <Link to='/account'>Account</Link>
        <Link to='/help'>Help</Link>
      </div>
    </nav>
    )
  }
}

export default NavBar;
