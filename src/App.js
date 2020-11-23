/**
 * 
 * Root component of the Application
 * 
 */

// External Packages
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

// Internal Modules
import Routes from './routing/Routes';
import store from './store/store';

import { 
  authenticateUser
} from './actionCreators/actions';


import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // Empty for now
    };
  };

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );
  }
}

// Typechecking for the App's passed in props
App.propTypes = {
  isAuthenticated: PropTypes.bool,
}

// Sets the default props of the container
App.defaultProps = {
  isAuthenticateed: false,
};

function mapStateToProps (state) {

  return {
    isAuthenticated: state.authentication.isAuthenticated
  };

}

export default connect(mapStateToProps,)(App);
