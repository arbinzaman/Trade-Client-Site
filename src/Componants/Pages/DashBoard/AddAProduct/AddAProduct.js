import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';

const AddAProduct = () => {
    const [img, setImg] = useState(null)
    const imageInput = (e) => {
        const file = e.target.files[0]
        setImg(file)
     
    }


    const { user } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const model = form.model.value;
        const resale_price = form.resale_price.value;
        const conditiontype = form.conditiontype.value;
        const mobilenumber = form.mobilenumber.value;
        const location = form.location.value;
        const productcategory = form.productcategory.value;
        const description = form.description.value;
        const years_of_use = form.years_of_use.value;
        const posted_time = form.posted_time.value;
        const seller_name = form.seller_name.value;
        const original_price = form.original_price.value;
        const yearofpurchase = form.yearofpurchase.value;
       
        const picture = img;
       
        

        const formData = new FormData();
        formData.append('image', picture);
        const url = `https://api.imgbb.com/1/upload?key=6cbb967e3c16f1e826cbddd427dbde87`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success  ) {
                    // const category_id = "1";
                // if (imgData.success || productcategory === "Apple" ) {
                //     const category_id = "1";
                    
                    // console.log(imgData.data.url);
                    // const addToProduct = {
                    //     model: model,
                    //     resale_price: resale_price,
                    //     specialty: data.specialty,
                    //     picture: imgData.data.url
                    // }

           




                    const picture = imgData.data.url
                    const addAProduct = {
                        model: model,
                        picture: picture,
                        conditiontype: conditiontype,
                        mobilenumber: mobilenumber,
                        location: location,
                        resale_price: resale_price,
                        productcategory,
                        description: description,
                        years_of_use: years_of_use,
                        posted_time: posted_time,
                        seller_name: seller_name,
                        original_price: original_price,
                        yearofpurchase: yearofpurchase,
                        picture: picture,
                        // category_id: category_id
                    };
                    console.log(addAProduct);

                    fetch('https://trade-buy-sell.vercel.app//myProducts', {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(addAProduct)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`Product is added successfully`);
                            Navigate('/dashboard/addaproduct')
                        })
                }
            })
    }



    return (
        <div className='text-center'>
            <div className="flex flex-col max-w-md p-6 mt-10 rounded-md sm:p-10 dark:bg-base-300 dark:text-black">
                <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="model" className="block mb-2 text-sm">Model</label>
                            <input type="model" name="model" id="model" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black" />
                        </div>
                        <div>
                            <label htmlFor="resale_price" className="block mb-2 text-sm">Resale Price</label>
                            <input type="resale_price" name="resale_price" id="resale_price" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black" />
                        </div>
                        <div>
                            <select type="conditiontype" name="conditiontype" id="conditiontype" className="select block w-full text-center text-black">
                                <option disabled selected>Condition Type</option>
                                <option>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="mobilenumber" className="block mb-2 text-sm">Mobile Number</label>
                            <input type="mobilenumber" name="mobilenumber" id="mobilenumber" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black" />
                        </div>
                        <div>
                            <label htmlFor="location" className="block mb-2 text-sm">Location</label>
                            <input type="location" name="location" id="location" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black" />
                        </div>
                        <div>

                            <select type="productcategory" name="productcategory" id="productcategory" defaultValue="User" className="select block w-full text-center text-black">
                                <option disabled selected>Product Catagory</option>
                                <option>Apple</option>
                                <option>Samsung</option>
                                <option>OnePlus</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="description" className="block mb-2 text-sm">Description</label>
                            <input type="description" name="description" id="description" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black" />
                        </div>
                        <div>
                            <label htmlFor="years_of_use" className="block mb-2 text-sm">Years of Use</label>
                            <input type="years_of_use" name="years_of_use" id="years_of_use" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black" />
                        </div>
                        <div>
                            <label htmlFor="posted_time" className="block mb-2 text-sm">Post Time</label>
                            <input type="posted_time" name="posted_time" id="posted_time" placeholder="24 November,2022" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black" />
                        </div>
                        <div>
                            <label htmlFor="seller_name" className="block mb-2 text-sm">Seller Name</label>
                            <input type="seller_name" name="seller_name" id="seller_name" placeholder="" defaultValue={user.name} className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black" />
                        </div>
                        <div>
                            <label htmlFor="original_price" className="block mb-2 text-sm">Original Price</label>
                            <input type="original_price" name="original_price" id="original_price" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black" />
                        </div>
                        <div>
                            <label htmlFor="yearofpurchase" className="block mb-2 text-sm">Year Of Purchase</label>
                            <input type="yearofpurchase" name="yearofpurchase" id="yearofpurchase" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black" />
                        </div>
                        <div>
                            <label htmlFor="file" className="block mb-2 text-sm">Drop A Picture</label>
                            <input type="file" onChange={imageInput} name="file" id="file" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black" />
                        </div>

                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md btn btn-primary dark:text-base-300">Submit</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAProduct;