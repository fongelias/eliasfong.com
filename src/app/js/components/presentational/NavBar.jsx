import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { PATHNAME } from './PATHNAME';

export const NavBar = () => (
	<nav>
		<span className="navContainer">
			<NavLink to={PATHNAME.LANDING_PAGE} className="navLink" activeClassName="active">home</NavLink>
			<NavLink to={PATHNAME.FAKE_NEWS_PAGE} className="navLink" activeClassName="active">fake news</NavLink>
			<NavLink to={PATHNAME.PROJECTS_PAGE} className="navLink" activeClassName="active">projects</NavLink>
		</span>
	</nav>
);