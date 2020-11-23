// Will take care of the state management

// External Packages
import React, { Component } from 'react';

// Internal Modules
import { HomePageContainer } from './styled.js';

// Will be managing the different components & state of the home page
// which on
// 1. needs to have a left panel taht tracks the current form the user is on
// 2. based on the form ID, will display the correct information on the second page
// --> This will in theory leads us to display different presentation components on the right

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {


        return (
            <HomePageContainer>
            </HomePageContainer>
        )
    }

}

export default HomePage;