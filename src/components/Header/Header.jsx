import React from 'react';
import { Navbar /*, Nav*/ } from 'react-bootstrap';
import { FaChartBar} from "react-icons/fa";
class Header extends React.Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark" fixed="top" expand="lg" className="header">
				<Navbar.Brand href="#home"><FaChartBar /> Lottó statisztika</Navbar.Brand>
				{/*<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home">Kezdőlap</Nav.Link>
						<Nav.Link href="#link">Ötös lottó</Nav.Link>
						<Nav.Link href="#link">Hatos lottó</Nav.Link>
						<Nav.Link href="#link">Skandináv lottó</Nav.Link>
					</Nav>
				</Navbar.Collapse>*/}
			</Navbar>
		);
	}
}

export default Header;