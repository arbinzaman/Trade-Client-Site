import React from 'react';
import UseTitle from '../../../../Hooks/UseTitle';
import CatagoriesCard from '../CatagoriesCard/CatagoriesCard';
import CatagoriesOfPhones from '../CatagoriesOfPhones/CatagoriesOfPhones';
import OfferBanner from '../OfferBanner/OfferBanner';
import Slider from '../Slider/Slider';
import TrustedBrand from '../TrustedBrand/TrustedBrand';

const Home = () => {
    UseTitle("Home")
    return (
        <div>
            <Slider></Slider>
            <CatagoriesCard></CatagoriesCard>
            <OfferBanner></OfferBanner>
            <TrustedBrand></TrustedBrand>
        </div>
    );
};

export default Home;