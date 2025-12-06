import React from 'react';
import Slider from '../Components/Slider';
import PopularSkills from '../Components/PopularSkills';
import TopRatedProvider from '../Components/TopRatedProvider';
import HowItWorks from '../Components/HowItWorks';

const Home = () => {
    return (
        <div>
            <Slider />
            <PopularSkills />
            <TopRatedProvider />
            <HowItWorks />
        </div>
    );
};

export default Home;