import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
				<nav>
					<span className="navContainer">
						<NavLink to={PATHNAME.ABOUT_PAGE} className="navLink" activeClassName="active">about</NavLink>
						<NavLink to={PATHNAME.FAKE_NEWS_PAGE} className="navLink" activeClassName="active">fake news</NavLink>
						<NavLink to={PATHNAME.PROJECTS_PAGE} className="navLink" activeClassName="active">projects</NavLink>
					</span>
				</nav>
				<header className="header-container">
					<EFLogo className="efLogo"/>
					<h1>ELIAS FONG</h1>
				</header>
			</div>
		);
	}
}