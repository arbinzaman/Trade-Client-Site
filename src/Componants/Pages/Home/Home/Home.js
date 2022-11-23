import React from 'react';
import UseTitle from '../../../../Hooks/UseTitle';
import Slider from '../Slider/Slider';
import TrustedBrand from '../TrustedBrand/TrustedBrand';

const Home = () => {
    UseTitle("Home")
    return (
        <div>
            <Slider></Slider>
            <TrustedBrand></TrustedBrand>
        </div>
    );
};

export default Home;