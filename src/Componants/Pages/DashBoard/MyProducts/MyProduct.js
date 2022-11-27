import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyProduct = ({ myProduct }) => {

    const [displayUser, setDisplayUser] = useState();

    const {
        picture,
        brand,
        model,
        location,
        original_price,
        resale_price,
        years_of_use,
        posted_time,
        seller_name
    } = myProduct;
    // handleDeleteUser
    const handleDeleteUser = _id => {


        fetch(`http://localhost:5000/myProducts/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    console.log(data.deletedCount);
                    toast.success("Product Deleted Succesfully")
                    const remainingUsers = displayUser.filter(usr => usr._id !== _id);
                    setDisplayUser(remainingUsers);
                }
            })
    }


    const handleAdvertise = _id => {

        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(myProduct)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`Product is added successfully`);
                Navigate('/dashboard/addaproduct')
            })
    }






return (
    <div>


        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="" /></figure>
                <div className="card-body">

                    <h2 className="card-title">{brand}</h2>
                    <p>Model : {model}</p>
                    <p>Loaction : {location}</p>
                    <p>Original Price : {original_price}</p>
                    <p>Resale Value : {resale_price}</p>
                    <p>Years Of Use : {years_of_use}</p>
                    <p>Seller Name : {seller_name}</p>
                    <p>Posted Time : {posted_time}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAdvertise(myProduct._id)} className='btn btn-primary'>Advertise</button>
                        <button onClick={() => handleDeleteUser(myProduct._id)} className='btn btn-danger'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div >

);}

export default MyProduct;