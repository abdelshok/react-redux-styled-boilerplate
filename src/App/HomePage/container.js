// Will take care of the state management

// External Packages
import React, { Component } from 'react';

// Internal Modules
import { FormLeftContainer, FormRightContainer, HomePageContainer } from './styled.js';
import ErrorBoundary from '../../HigherOrderComponents/ErrorBoundary.js';
import { FormLeftOptionElement } from './components.js';

// Will be managing the different components & state of the home page
// which on
// 1. needs to have a left panel taht tracks the current form the user is on
// 2. based on the form ID, will display the correct information on the second page
// --> This will in theory leads us to display different presentation components on the right

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formSelection: ['Compensation', 'Opportunity', 'Reason for Looking', 'Tech Stack', 'Visa Status', 'Activity', 'Locations', 'Ability to Interview', 'Experience', 'Start Date'],
        }
    }

    render() {


        const FormLeftSelectionItems = [];

        for (const [index, value] of this.state.formSelection.entries()) {
            let isFirstComponent = index === 0 ? true : false;
            FormLeftSelectionItems.push(<FormLeftOptionElement key={index} selectionName={value} isFirstComponent={isFirstComponent}/>)
        }

        return (
            <ErrorBoundary>
            <HomePageContainer>
                <FormLeftContainer>
                    {FormLeftSelectionItems}
                </FormLeftContainer>
                <FormRightContainer>

                </FormRightContainer>
            </HomePageContainer>
            </ErrorBoundary>
        )
    }

}

export default HomePage;