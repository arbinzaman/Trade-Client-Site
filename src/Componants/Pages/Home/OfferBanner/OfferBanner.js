import React from 'react';
import { Link } from 'react-router-dom';

const OfferBanner = () => {
    return (
        <div>
            <div className="p-6 py-12 bg-base-300 dark:text-gray-900">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                            <p className="">50% Off</p>
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Plus free shipping! Use code:</span>
                            <span className="font-bold text-lg">Trade69</span>
                        </div>
                        <Link to='/catagories' rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferBanner;