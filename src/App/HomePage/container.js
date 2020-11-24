// Will take care of the state management

// External Packages
import React, { Component } from 'react';

// Internal Modules
import { FormLeftContainer, FormRightContainer, HomePageContainer } from './styled.js';
import ErrorBoundary from '../../HigherOrderComponents/ErrorBoundary.js';
import { FormLeftOptionElement } from './components.js';

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
                </FormLeftContainer>
                <FormRightContainer>
                </FormRightContainer>
            </HomePageContainer>
            </ErrorBoundary>
        )
    }

}

export default HomePage;