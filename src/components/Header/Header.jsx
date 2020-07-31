import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar , Nav } from 'react-bootstrap';
import { FaChartBar} from 'react-icons/fa';

const Header = props => {
	const [animate, setAnimate] = useState(false);

	const handleClick = () => setAnimate(!animate);

	return (
		<React.Fragment>
			<Navbar bg="dark" variant="dark" fixed="top" expand="md" className="header">
				<NavLink className="navbar-brand"
				         variant="danger"
				         exact to="/">
					<FaChartBar /> Lottó statisztika
				</NavLink>
				<button
					onClick={handleClick}
					type="button"
					aria-label="Toggle navigation"
					className={animate ? 'navbar-toggler collapsed open' : 'navbar-toggler collapsed'}>
					<div />
				</button>
				<Navbar.Collapse id="basic-navbar-nav" className={animate ? 'open' : null}>
					<Nav className="mr-auto">
						<NavLink
							activeClassName="active"
							className="nav-link"
							exact to="/">
							Kezdőlap
						</NavLink>
						<NavLink
							activeClassName="active"
							className="nav-link"
							to="/otos">
							Ötös lottó
						</NavLink>
						<NavLink
							activeClassName="active"
							className="nav-link"
							to="/hatos">
							Hatos lottó
						</NavLink>
						<NavLink
							activeClassName="active"
							className="nav-link"
							to="/hetes">
							Skandináv lottó
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			{animate ? <div className="overlay"/> : null}
		</React.Fragment>
	);
}

export default Header;