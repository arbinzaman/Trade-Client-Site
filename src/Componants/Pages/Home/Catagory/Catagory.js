import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategoryCard from './SingleCategoryCard';
import BookingModal from "../../Home/BookingModal/BookingModal";

const Catagory = () => {
    const [buyNow, setBuyNow] = useState(null);
    const catagoriesData = useLoaderData();
    // console.log(catagoriesData);


    return (
        <div className='grid md:grid-cols-3 gap-3 my-20'>
            {
                catagoriesData.map(categoryData => <SingleCategoryCard
                    key={categoryData._id}
                    categoryData={categoryData}
                    setBuyNow={setBuyNow}
                ></SingleCategoryCard>)
            }

            {

                buyNow &&
                <BookingModal
                    booking={buyNow}
                ></BookingModal>
            }
        </div>

    );
};

export default Catagory;