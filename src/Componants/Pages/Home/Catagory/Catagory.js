import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import SingleCategoryCard from './SingleCategoryCard';

const Catagory = () => {
    const [catagoriesData , setCatagoriesData] = useState([]);
    console.log(catagoriesData);
    useEffect(()=>{
        fetch('http://localhost:5000/category/1')
        .then(res => res.json())
        .then(data => setCatagoriesData(data));
    },[])
    console.log(catagoriesData);
    return (
        <div>
            {
                catagoriesData.map( categoryData => <SingleCategoryCard
                key={categoryData._id}
                categoryData={categoryData}
                ></SingleCategoryCard>)
            }
        </div>
    );
};

export default Catagory;