import React from 'react';
import Article from '../Article/Article';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Spots from '../Spots/Spots';
import Tourguide from '../Tourguide/Tourguide';
import UpcomingTour from '../UpcomingTour/UpcomingTour';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Spots></Spots>
            <UpcomingTour></UpcomingTour>
            <Tourguide></Tourguide>
            <Article></Article>
            <Review></Review>
            
        </div>
    );
};

export default Home;