import React from 'react';
import Loading from '../components/Loading/Loading';

const lottoFivePage = ({data}) => {
	if(data) {
		return (
			<div className="main__content">
				<h1>Ötös</h1>
			</div>
		)
	} else {
		return <Loading />
	}
}

export default lottoFivePage;