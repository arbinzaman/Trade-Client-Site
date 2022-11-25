import React from 'react';

const BookingModal = ({ booking }) => {
    const { model, resale_price, location } = booking;
    return (
        <>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <label htmlFor="bookingModal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">

                    {/* from modal */}
                    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-base-100 text-black">
                        <form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-4">
                                <div>

                                    <input type="email" name="email" id="email" defaultValue={location} disabled  className="w-full px-3 py-2 border rounded-md  bg-base-300 text-black" />
                                </div>
                                <div>
            
                                    <input type="text" name="text" id="text" defaultValue={model} disabled className="w-full px-3 py-2 border rounded-md  bg-base-300 text-black" />
                                </div>
                                <div>
            
                                    <input type="text" name="text" id="text" defaultValue={resale_price} disabled className="w-full px-3 py-2 border rounded-md  bg-base-300 text-black" />
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