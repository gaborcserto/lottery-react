import React from 'react';

const errorPage = () => {
	return (
		<div className="main__content">
			<h2 className="mainContent__title">Oops! Page not found!</h2>
			<div className="error404">
				<div className="glitch" data-text="404">404</div>
			</div>
		</div>
	)
}

export default errorPage;