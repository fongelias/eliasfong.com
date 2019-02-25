import React, { Component } from 'react';

import { PATHNAME } from './PATHNAME';


export class LandingPage extends Component {
	static pathName() {
		return PATHNAME.LANDING_PAGE;
	}

	constructor() {
		super();
	}

	render() {
		return (
			<div className="landingPage"></div>
		);
	}
}