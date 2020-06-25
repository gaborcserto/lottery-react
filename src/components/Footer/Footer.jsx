import React from 'react';
import { FaReact, FaBootstrap, FaNodeJs, FaHtml5} from "react-icons/fa";
class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<FaReact/>
				<FaNodeJs/>
				<FaBootstrap />
				<FaHtml5/>
			</footer>
		);
	}
}

export default Footer;