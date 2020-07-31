import React from 'react';
import Loading from '../components/Loading/Loading';

const lottoSixPage = ({data}) => {
	if(data) {
		return (
			<div className="main__content">
				<h1>Hatos</h1>
			</div>
		)
	} else {
		return <Loading />
	}
}

export default lottoSixPage;