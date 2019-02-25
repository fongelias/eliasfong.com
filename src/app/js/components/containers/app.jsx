import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';

import { LandingPage } from '../containers';



export const App = () => (
	<Router>
		<Switch>
			<Route exact path={LandingPage.pathName()} component={LandingPage}/>
			<Route path="/*" component={LandingPage}/>
		</Switch>
	</Router>
);