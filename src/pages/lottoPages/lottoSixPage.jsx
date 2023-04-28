import React from 'react';
import Loading from '../../components/common/loading';
import Statistics from "../../components/statistic/statistic";

const lottoSixPage = ({data, type}) => {
  if (data) {
    return (
        <div className="main__content">
          <h1>Hatos</h1>
          <Statistics data={data.numberStatistics} type={type} lotteryData={data.drawings}/>
        </div>
    )
  } else {
    return <Loading/>
  }
}

export default lottoSixPage;