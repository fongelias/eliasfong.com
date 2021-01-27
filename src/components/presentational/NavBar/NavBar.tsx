import React from 'react';
import { LANDING_PAGE_PATH } from 'components/containers/LandingPage/LandingPage';
import { NavLink } from 'react-router-dom';
import { FlexBox } from 'components/presentational/FlexBox/FlexBox';

import styles from './NavBar.module.scss';

export const NavBar = () => (
	<nav>
		<FlexBox>
			<NavLink
				to={LANDING_PAGE_PATH}
				className={styles.navLink}
				activeClassName="active">
				projects
			</NavLink>
			<NavLink
				to=""
				className={styles.navLink}
				activeClassName="active">
				about
			</NavLink>
		</FlexBox>
	</nav>
);
