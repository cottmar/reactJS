import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

const BaseLayout = () => (
      <div className='Base'>
     <header>
      <p>React Router v4 Browser Example</p>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/me'>Profile</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
    </header>
     <div className="container">
     <Route path="/" exact component={HomePage} />
     <Route path="/about" component={AboutPage} />
     <Route path="/contact" component={ContactPage} />
     <Route path="/login" component={LoginPage} />
     <Route path="/register" component="{RegisterPage}" />
     <Route path="/me" component={ProfilePage} />
   </div>
   <footer>
       React Router v4 Browser Example (c) 2017
   </footer>
  </div>
)


const HomePage = () => <div>This is a Home Page</div>
const LoginPage = () => <div>This is a Login Page</div>
const RegisterPage = () => <div>This is a Register Page</div>
const ProfilePage = () => <div>This is the Profile Page</div>
const AboutPage = () => <div>This is an About Page</div>
const ContactPage = () => <div>This is a Contact Page</div>

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <BaseLayout/>
      </BrowserRouter>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
