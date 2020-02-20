import React from 'react';
import { NavLink } from 'react-router-dom';

export const PATHNAME = {
	LANDING_PAGE: '/',
	ABOUT_PAGE: '/About',
	FAKE_NEWS_PAGE: '/FakeNews',
	PROJECTS_PAGE: '/Projects',
}

export const NavBar = () => (
	<nav>
		<span className="navContainer">
			<NavLink to={PATHNAME.LANDING_PAGE} className="navLink" activeClassName="active">home</NavLink>
			<NavLink to={PATHNAME.ABOUT_PAGE} className="navLink" activeClassName="active">about</NavLink>
			<NavLink to={PATHNAME.PROJECTS_PAGE} className="navLink" activeClassName="active">projects</NavLink>
		</span>
	</nav>
);