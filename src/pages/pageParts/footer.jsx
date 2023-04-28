import React from 'react';
import {FaBootstrap, FaReact, FaSass} from "react-icons/fa";

class Footer extends React.Component {
  render() {
    return (
        <footer className="footer">
          <div className="footer__icon"><FaReact/></div>
          <div className="footer__icon"><FaBootstrap/></div>
          <div className="footer__icon"><FaSass/></div>
        </footer>
    );
  }
}

export default Footer;