// Will hold all the different presentational components that will be used across this
// feature set 

// External Packages
import React, { Component } from 'react';
import styled from 'styled-components';

const FormLeftOptionContainer = styled.div`
    width: 100%;
    border: 1px solid white;
    height: 100px;
    cursor: pointer;
    &:hover {
        border: 1px solid black;
    }
    margin-top: ${props => props.firstComponent ? '50px' : '0px'};
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
    background-color: red;
    display: inline-block;
    z-index: 6000;
`

const FormLeftOptionElement = (props) => {
    console.log('Form Left Option rendered with props', props);
    return (
        <FormLeftOptionContainer firstComponent={props.firstComponent}>
            <FormText>
                Current Form Selection 1
            </FormText>
        </FormLeftOptionContainer>
    )
}


export {
    FormLeftOptionElement
}