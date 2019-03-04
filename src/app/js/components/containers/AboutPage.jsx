import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { PATHNAME } from './PATHNAME';



export class AboutPage extends Component {
	static pathName() {
		return PATHNAME.ABOUT_PAGE;
	}

	constructor() {
		super();
	}

	render() {
		return (
			<div className="aboutPage">
				<nav>
					<span className="navContainer">
						<NavLink to={PATHNAME.LANDING_PAGE} className="navLink" activeClassName="active">home</NavLink>
						<NavLink to={PATHNAME.FAKE_NEWS_PAGE} className="navLink" activeClassName="active">fake news</NavLink>
						<NavLink to={PATHNAME.PROJECTS_PAGE} className="navLink" activeClassName="active">projects</NavLink>
					</span>
				</nav>
				<div className="aboutContainer">
					<div className="innerContainer">
						<p>I make things. You'll find them <Link to={PATHNAME.PROJECTS_PAGE} className="inlineLink">here</Link>.</p>
						<p>Currently working in NYC</p>
					</div>
				</div>
			</div>
		);
	}
}
