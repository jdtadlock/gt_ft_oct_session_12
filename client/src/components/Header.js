import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = props => (
	<header>
		<NavLink to="/" exact>
			<h3>Logo</h3>
		</NavLink>

		<nav>
			<NavLink to="/about">About</NavLink>
		</nav>
	</header>
)