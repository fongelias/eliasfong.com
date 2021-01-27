import React from 'react';
import { NavLink } from 'react-router-dom';
import { FlexBox } from '../presentational';

const Option = (props) => (
  <NavLink to={props.pathName} className="navLink" activeClassName="active">{props.linkName}</NavLink>
);

const Container = (props) => (
	<nav>
		<FlexBox className="leftNavContainer">
			{props.children}
		</FlexBox>
	</nav>
);


export const LeftNav = {
  Container,
  Option,
}
