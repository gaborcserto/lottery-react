import React, {Suspense, useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from '../pages/pageParts/header.jsx';
import Footer from '../pages/pageParts/footer.jsx';
import Loading from '../components/common/loading';
import fetchingData from '../hooks/fetchingData';

import HomePage from '../pages/homePage';
import LottoFivePage from '../pages/lottoPages/lottoFivePage';
import LottoSixPage from '../pages/lottoPages/lottoSixPage';
import LottoSevenPage from '../pages/lottoPages/lottoSevenPage';
import ErrorPage from '../pages/errorPage/errorPage';

const App = () => {

    const [lottoFiveAllData, setLottoFiveAllData] = useState(null);
    const [lottoSixAllData, setLottoSixAllData] = useState(null);
    const [lottoSevenAllData, setLottoSevenAllData] = useState(null);

    const lottoFive = fetchingData({
        queryType: 'otos'
    });

    const lottoSix = fetchingData({
        queryType: 'hatos'
    });

    const lottoSeven = fetchingData({
        queryType: 'skandi'
    });

    const suspense = (
        <div className="main__content">
            <Loading/>
        </div>
    );

    useEffect(() => {
        if (lottoFive.response !== null) {
            setLottoFiveAllData(lottoFive.response);
        }
        if (lottoSix.response !== null) {
            setLottoSixAllData(lottoSix.response);
        }
        if (lottoSeven.response !== null) {
            setLottoSevenAllData(lottoSeven.response);
        }
    }, [lottoFive.response, lottoSix.response, lottoSeven.response]);

    return (
        <>
            <Header/>
            <Container className="main">
                <Suspense fallback={suspense}/>
                <Routes>
                    <Route path="/otos" element={<LottoFivePage data={lottoFiveAllData} type={5}/>}/>
                    <Route path="/hatos" element={<LottoSixPage data={lottoSixAllData} type={6}/>}/>
                    <Route path="/hetes" element={<LottoSevenPage data={lottoSevenAllData} type={7}/>}/>
                    <Route exact="true" path="/" element={
                        <HomePage
                            dataFive={lottoFiveAllData}
                            dataSix={lottoSixAllData}
                            dataSeven={lottoSevenAllData}/>
                    }/>
                    <Route component={ErrorPage}/>
                </Routes>
                <Footer/>
            </Container>
        </>
    );
}

export default App;