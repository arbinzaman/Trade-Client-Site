import React from 'react';

const SingleCategoryCard = ({catagoryData}) => {
console.log(catagoryData);
    const { picture, brand, model, location, original_price, resale_price, years_of_use, posted_time, seller_name }= catagoryData;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="" /></figure>
                <div className="card-body">

                    <h2 className="card-title">{brand}</h2>
                    <p>Model : {model}</p>
                    <p>Loaction : {location}</p>
                    <p>Original Price : {original_price}</p>
                    <p>Resale Value : {resale_price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCategoryCard;