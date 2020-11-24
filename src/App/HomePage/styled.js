// Will implement the styled components

import styled from 'styled-components';

// We use a global variable in order to avoid having to refactor the widht every time for the two 
// styled components below.
const LeftContainerWidth= 34; 

const HomePageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: white;
    display: flex;
    flex-direction: row;
`;

const FormLeftContainer = styled.div`
    width: ${LeftContainerWidth}%;
    background-color: #555;
    height: 100vh;
    min-width: 200px;
    display: flex;
    flex-direction: column;
`;

const FormRightContainer = styled.div`
    width: ${100-LeftContainerWidth}%;
    background-color: white;
    height: 100vh;
    position: relative;
`;

export { 
    HomePageContainer,
    FormLeftContainer,
    FormRightContainer,
};