import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CatagoriesCard.css'

const CatagoriesCard = () => {

    const navigate = useNavigate();
    const handleOneCategory = (id) => {
        navigate(`/catagory/${id}`);
    };
    return (
        <div className='text-center justify-items-center '>
            <h1 className='font-bold text-5xl '>Catagories of Phones</h1>
            <div className='grid md:grid-cols-3 gap-3 my-20'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg" alt="Apple" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-xl text-center pb-2">Apple</h2>
                        <button className="btn btn-primary" onClick={() => handleOneCategory("1")}>Buy Now</button>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://logos-world.net/wp-content/uploads/2020/04/Samsung-Symbol.png" alt="Shoes" className='p-10' /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-xl text-center pb-2">Samsung</h2>
                        <button className="btn btn-primary " onClick={() => handleOneCategory("2")}>Buy Now</button>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/OP_LU_Reg_1L_RGB_red_copy-01.svg/330px-OP_LU_Reg_1L_RGB_red_copy-01.svg.png" alt="phone" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-xl text-center pb-2">Oneplus</h2>
                        <button className="btn btn-primary " onClick={() => handleOneCategory("3")}>Buy Now</button>

                    </div>
                </div>
            </div>
            <Link to="/catagories"><button className="btn btn-primary text-xl mb-10">See All</button></Link>
        </div>
    );
};

export default CatagoriesCard;