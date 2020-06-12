import React from 'react';
import { Navbar } from 'react-bootstrap';
import { FaReact } from "react-icons/fa";
class Header extends React.Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark" fixed="top">
				<Navbar.Brand href="#home"><FaReact /> Header component</Navbar.Brand>
			</Navbar>
		);
	}
}

export default Header;