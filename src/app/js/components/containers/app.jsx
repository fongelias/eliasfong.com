import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
	LandingPage,
	AboutPage,
	PhotographyPage,
	PHOTOGRAPHY_PAGE_PATHNAME
} from '../containers';



export const App = () => (
	<Router>
		<Switch>
			<Route exact path={LandingPage.pathName()} component={LandingPage}/>
			<Route exact path={AboutPage.pathName()} component={AboutPage}/>
			<Route exact path={PHOTOGRAPHY_PAGE_PATHNAME} component={PhotographyPage}/>
			<Route path="/*" component={LandingPage}/>
		</Switch>
	</Router>
);