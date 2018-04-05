import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styles from '../styles/App.css'

import Navbar from './Navbar'

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Help = () => <h2>Help</h2>
const Banner = () => <h2>Banner</h2>
const BannerImage = () => <h2>BannerImage</h2> //presentational
const Footer = () => <h2>Footer</h2> // presentational
const Video = () => <h2>Video</h2> //container
const Fakesite = () => <h2>Fakesite</h2> //container
const Account = () => <h2>Account</h2> //container
// const Logo = () => <h2>Logo</h2> //presentational

class App extends Component {
  render(){
  return (
     <div id="main" className="container-fluid" styleName="main">
    <h1 styles={styles.heading}>Hi!</h1>
      <BrowserRouter>
        <div>
        <Navbar />
        <Route path="/" component={Home} />
        </div>
      </BrowserRouter>
        <Button bsStyle='success'>Hi</Button>
    </div>
    )
  }
}

export default App;