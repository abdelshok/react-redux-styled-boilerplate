// Will hold all the different presentational components that will be used across this
// feature set 

// External Packages
import React, { Component } from 'react';
import styled from 'styled-components';

// Height is set to 9% as we will be having 10 different selections for the left panel
// This might change in the future, as we might simply set a fixed height in order to avoid any responsiveness-related display errors.

const FormLeftOptionContainer = styled.div`
    width: 100%;
    border: 1px solid white;
    height: 9%;
    cursor: pointer;
    &:hover {
        border: 1px solid black;
    }
    margin-top: ${props => props.isFirstComponent ? '20px' : '0px'};
    display: flex;
    justify-content: center;
    align-items: center;
`

const FormText = styled.p`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 4px;
    color: white;
    text-align: center;
    background-color: transparent;
    display: inline-block;
    z-index: 6000;
`

const FormLeftOptionElement = (props) => {
    console.log('Form Left Option rendered with props', props);
    return (
        <FormLeftOptionContainer isFirstComponent={props.isFirstComponent}>
            <FormText>
                { props.selectionName }
            </FormText>
        </FormLeftOptionContainer>
    )
}


export {
    FormLeftOptionElement
}