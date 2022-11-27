import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MyProduct from './MyProduct';

const MyProducts = () => {

    const url = `http://localhost:5000/myProducts`;

    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })









    return (
        <div>
            <h1 className='text-3xl font-bold mb-10 mt-5 '>My Products</h1>


            {
                myProducts.map((myProduct) => <MyProduct
                key={myProduct._id}
                myProduct={myProduct}
                ></MyProduct>
                            )}
        </div>
    );
};

export default MyProducts;