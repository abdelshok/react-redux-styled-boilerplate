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

import { GlobalTheme } from './shared';

import { 
  authenticateUser
} from './actionCreators/actions';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // Empty for now
    };
  };

  render() {

    const childProps = {
      isAuthenticated: this.props.isAuthenticated,
    }

    return (
        <ThemeProvider theme={GlobalTheme}>
          <Routes childProps={childProps} />
        </ThemeProvider>
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
