import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisedItem from './AdvertisedItem';

const AdvertiseItems = () => {

    const url = `http://localhost:5000/advertise`;

    const { data: advertiseItems = [], refetch } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
             <h1 className='text-3xl font-bold mb-10 mt-5 '>Advertised Items</h1>


{
    advertiseItems.map((advertiseItem) => <AdvertisedItem
    key={advertiseItem._id}
    advertiseItem={advertiseItem}
    ></AdvertisedItem>
                )}
        </div>
    );
};

export default AdvertiseItems;