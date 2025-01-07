import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import PopularMenu from '../Components/PopularMenu';
import BistroSection from '../Components/BistroSection';
import ShouldTry from '../Components/ShouldTry';
import CheckItOut from '../Components/CheckItOut';
import Tesstimonials from '../Components/Tesstimonials';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroSection></BistroSection>
            <PopularMenu></PopularMenu>
            <ShouldTry></ShouldTry>
            <CheckItOut></CheckItOut>
            <Tesstimonials></Tesstimonials>
        </div>
    );
};

export default HomePage;