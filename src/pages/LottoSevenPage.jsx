import React from 'react';
import Loading from '../components/Loading/Loading';

const lottoSevenPage = ({data}) => {
	if(data) {
		return (
			<div className="main__content">
				<h1>Hetes</h1>
			</div>
		)
	} else {
		return <Loading />
	}
}

export default lottoSevenPage;