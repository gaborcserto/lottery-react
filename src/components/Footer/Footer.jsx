import React from 'react';
import { FaReact, FaBootstrap, FaSass, FaJs, FaFontAwesome, FaNpm} from "react-icons/fa";
class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<div className="footer__icon"><FaReact/></div>
				<div className="footer__icon"><FaJs/></div>
				<div className="footer__icon"><FaNpm/></div>
				<div className="footer__icon"><FaBootstrap /></div>
				<div className="footer__icon"><FaSass /></div>
				<div className="footer__icon"><FaFontAwesome/></div>
			</footer>
		);
	}
}

export default Footer;