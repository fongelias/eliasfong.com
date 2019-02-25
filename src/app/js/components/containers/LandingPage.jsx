import React, { Component } from 'react';

import { PATHNAME } from './PATHNAME';
// svgs
import EFLogo from '../../../svg/ef_logo.svg';


export class LandingPage extends Component {
	static pathName() {
		return PATHNAME.LANDING_PAGE;
	}

	constructor() {
		super();
	}

	render() {
		return (
			<div className="landingPage">
				<header className="header-container">
					<EFLogo className="efLogo"/>
					<h1>ELIAS FONG</h1>
				</header>
			</div>
		);
	}
}