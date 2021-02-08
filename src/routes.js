import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { authenticated } from './authenticate';

import Home from './Pages/Home';
import Pictures from './Pages/Pictures';
import ErrorPage from './Pages/ErrorPage';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component= { Home }/>
                <Route path="/pictures/:id" >
                    { authenticated ? <Pictures /> :  <Redirect to="/" />}
                </Route>

                <Route path="*" component= { ErrorPage } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;