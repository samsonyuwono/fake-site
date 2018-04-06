import React, { Component } from 'react';
import heroImage from '../assets/hero-image.png';
import styles from '../styles/Home.css';
import Button from './Button'

class Home extends Component {

  handleOnClick(){
    console.log('you clicked on something awesome!')
  }

  render(){
    return(
    <div>
      <img className={styles.hero} src={heroImage} alt="logo" />
      <h2 className={styles.heading}>The world's greatest fake site</h2>
      <p className={styles.paragraph}>Create the world's greatest fake site and enjoy the breeze
      of fresh air when you complete it</p>
      <Button onClick={this.handleOnClick} />
    </div>
    )
  }
}

export default Home;
