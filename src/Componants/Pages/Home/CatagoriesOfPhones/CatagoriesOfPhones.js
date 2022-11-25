import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import CatagoriesOfPhone from './CatagoriesOfPhone'
import UseTitle from '../../../../Hooks/UseTitle';
import BookingModal from '../BookingModal/BookingModal';
const CatagoriesOfPhones = () => {
    // const catagoriesOfPhones = useLoaderData();
    // console.log(catagoriesOfPhones);
    UseTitle("All Phones")

    const [catagoriesOfPhones , setCategories] = useState([]);
   const [booking, setBooking]= useState(null);
    // console.log(catagoriesOfPhones);
    useEffect(()=>{
        fetch('http://localhost:5000/catagories')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])
    return (
        <div>
          
            <div className='grid md:grid-cols-3 gap-3 my-20'>
                {
                    catagoriesOfPhones.map(catagoriesOfSinglePhone => <CatagoriesOfPhone
                        key={catagoriesOfSinglePhone._id}
                        catagoriesOfSinglePhone={catagoriesOfSinglePhone}
                        setBooking = {setBooking}
                    ></CatagoriesOfPhone>)
                }
            </div>
            
           {
            booking &&
             <BookingModal
             booking ={booking}
             ></BookingModal>
           }
        </div>
    );
};

export default CatagoriesOfPhones;