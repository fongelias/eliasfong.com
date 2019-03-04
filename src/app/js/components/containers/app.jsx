import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';

import { LandingPage, AboutPage } from '../containers';



export const App = () => (
	<Router>
		<Switch>
			<Route exact path={LandingPage.pathName()} component={LandingPage}/>
			<Route exact path={AboutPage.pathName()} component={AboutPage}/>
			<Route path="/*" component={LandingPage}/>
		</Switch>
	</Router>
);