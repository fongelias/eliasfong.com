import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavBar, PATHNAME } from '../presentational';


export class AboutPage extends Component {
	static pathName() {
		return PATHNAME.ABOUT_PAGE;
	}

	constructor() {
		super();
		console.log('this was updated on 2/13/20, 12:53');
	}

	render() {
		return (
			<div className="aboutPage">
				<NavBar />
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
