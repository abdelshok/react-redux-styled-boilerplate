/**
 * 
 * This class will take care of the routing of the application and display the 
 * 
 */


// External Packages
import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

// Internal Modules
import AuthenticatedRoute from '../components/AuthenticatedRoute';
import UnauthenticatedRoute from '../components/UnauthenticatedRoute';

// #toDo: create 404 error page displayed when user can't login.

export default ({childProps}) =>
    <BrowserRouter>
        <Switch>
            {/* <UnauthenticatedRoute path='/' exact component={HomePage} props={childProps} /> 
            <UnauthenticatedRoute path='/about' exact component={AboutPage} props={childProps} />  */}
        </Switch>
    </BrowserRouter>
