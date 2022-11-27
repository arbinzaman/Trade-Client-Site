import React from 'react';
import UseTitle from '../../../../Hooks/UseTitle';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
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
            <AdvertiseItems></AdvertiseItems>
            <CatagoriesCard></CatagoriesCard>
            <OfferBanner></OfferBanner>
            <TrustedBrand></TrustedBrand>
        </div>
    );
};

export default Home;