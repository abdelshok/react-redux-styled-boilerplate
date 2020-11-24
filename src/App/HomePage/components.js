// Will hold all the different presentational components that will be used across this
// feature set 

// External Packages
import React, { Component } from 'react';
import styled from 'styled-components';

const FormLeftOptionContainer = styled.div`
    width: 100vw;
    border: 1px solid white;
    height: 100px;
    cursor: pointer;
    &:hover {
        border: 1px solid black;
    }
`

const FormLeftOptionElement = (props) => {
    return (
        <FormLeftOptionContainer>
            Current Form Option
        </FormLeftOptionContainer>
    )
}


export {
    FormLeftOptionElement
}