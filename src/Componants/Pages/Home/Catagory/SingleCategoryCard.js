import React from 'react';

const SingleCategoryCard = ({ categoryData, setBuyNow }) => {
    console.log(categoryData);
    const { picture, brand, model, location, original_price, resale_price, years_of_use, posted_time, seller_name } = categoryData;
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure><img src={picture} alt="" /></figure>
                <div className="card-body">

                    <h2 className="card-title">{brand}</h2>
                    <p>Model : {model}</p>
                    <p>Loaction : {location}</p>
                    <p>Original Price : {original_price}</p>
                    <p>Resale Value : {resale_price}</p>
                    <p>Years Off Use : {years_of_use}</p>
                    <div className="card-actions justify-end">

                    
                    
                        <label 
                        htmlFor="bookingModal" 
                        className="btn btn-primary"
                        onClick={()=> setBuyNow(categoryData)}
                        >Buy Now</label>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCategoryCard;