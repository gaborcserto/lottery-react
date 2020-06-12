import React from 'react';
import {AppBar, Typography} from '@material-ui/core';

class Header extends React.Component {
	render() {
		return (
			<AppBar position="fixed" className="header">
				<Typography className="title" variant="h6" noWrap>
					Header component
				</Typography>
			</AppBar>
		);
	}
}

export default Header;