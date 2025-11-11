import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import UseTitle from '../../../../Hooks/UseTitle';
const BookingModal = ({ booking }) => {

    UseTitle("Category of Phones");
    const { model, resale_price } = booking;
    const { user } = useContext(AuthContext);
    const [items ,setitems]= useState([]);

   useEffect(()=>{
        fetch('https://trade-buy-sell.vercel.app/items')
        .then(res=>res.json())
        .then(data=>setitems(data))
    },[items])

    const handleReviewSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const model = form.model.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const price = form.price.value;
        const loaction = form.loaction.value;

        const formValue = {model ,email,phone, loaction ,price};
         console.log(formValue);
   
        if (user?.uid) {
            fetch("https://trade-buy-sell.vercel.app/items", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(formValue),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.acknowledged) {
                        toast.success("Items Added Successfully");
                      
                    }
                })
                .catch((err) => console.log(err));
        } else {
            toast.alert("Please login first to provide Items");
        }
    }


    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <label htmlFor="bookingModal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">

                    {/* from modal */}
                    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-base-100 text-black">
                        <form  onSubmit={handleReviewSubmit} noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-4">
                                <div>

                                    <input type="email" name="email" id="email" defaultValue={user.email} disabled  className="w-full px-3 py-2 border rounded-md  bg-base-300 text-black" />
                                </div>
                                <div>
            
                                    <input type="model" name="model" id="model" defaultValue={model} disabled className="w-full px-3 py-2 border rounded-md  bg-base-300 text-black" />
                                </div>
                                <div>
            
                                    <input type="price" name="price" id="price" defaultValue={resale_price} disabled className="w-full px-3 py-2 border rounded-md  bg-base-300 text-black" />
                                </div>
                                <div>
            
                                    <input type="phone" name="phone" id="phone" placeholder='phone' className="w-full px-3 py-2 border rounded-md  bg-base-300 text-black" />
                                </div>
                                <div>
            
                                    <input type="loaction" name="loaction" id="loaction" placeholder='Loaction that you want to meet' className="w-full px-3 py-2 border rounded-md  bg-base-300 text-black" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md btn btn-primary dark:text-gray-900">Submit</button>
                                </div>
                            
                            </div>
                        </form>
                    </div>



                </label>
            </label>
        </>
    );
};

export default BookingModal;