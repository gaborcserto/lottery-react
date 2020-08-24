import React from 'react';
import Loading from '../components/Loading/Loading';
import Statistics from '../components/Statistic/Statistic';

const lottoFivePage = ({data, type}) => {
	if(data) {
		return (
			<div className="main__content">
				<h1>Ötös</h1>
				<Statistics data={data.numberStatistics} type={type} lotteryData={data.drawings}/>
			</div>
		)
	} else {
		return <Loading />
	}
}

export default lottoFivePage;