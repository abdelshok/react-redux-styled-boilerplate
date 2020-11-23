/**
 * 
 * Error Boundary Component
 * Declared here & will be used throughout the application in order to wrap React Components
 * lower in the tree hierarchy in order to log errors & prevent the whole app from crashing.
 * Introduced in React 16.
 * 
 */

// External Packages
import React, { Component } from 'react';
import styled from 'styled-components';

const ErrorMessageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            containsError: false
        };
    }

    componentDidCatch(error, errorInfo) {
        
        console.error(`Error caught ${error}`);
        console.error('Error infomration found here: ', errorInfo);

    }

    render() {

        if (this.state.hasError) {
            return <ErrorMessageContainer>
                <h1> Something went wrong, captain. </h1>
            </ErrorMessageContainer>

        }
    }
}

export default ErrorMessageContainer;