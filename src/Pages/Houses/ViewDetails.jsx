import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
   const singleHouse = useLoaderData();
   const {image, bathrooms, bedrooms, city, date, description, houseAddress, houseName, phoneNumber, rentPerMonth, roomSize} = singleHouse;
   console.log(singleHouse.image);
    return (
        <div className='max-w-screen-lg mx-auto '>
    

        <div className=' md:my-12'>
            <div className="grid md:grid-cols-2 gap-10 lg:card-side bg-primary shadow-2xl drop-shadow-2xl p-4 md:p-6 text-white border-2 border-[#CAAF69]">
                <div className='my-auto'><img src={image}  className='w-full h-auto' alt="Album" /></div>
                <div className="w-9/12 my-auto">
                    <p className='pb-2'><span className='font-bold'>House Name</span>: {houseName} </p>
                    <p className='pb-2'><span className='font-bold'>House Address</span>: {houseAddress} </p>
                    <p className='pb-2'><span className='font-bold'>City</span>: {city} </p>
                    <p className='pb-2'><span className='font-bold'>Bedrooms: </span> {bedrooms} </p>
                    <p className='pb-2'><span className='font-bold'>Bathrooms: </span> {bathrooms} </p>
                    <p className='pb-2'><span className='font-bold'>Date: </span> {date} </p>
                    <p className='pb-2'><span className='font-bold'>Rent Per Month: </span> {rentPerMonth} </p>
                    
                    <p className='pb-2'><span className='font-bold'>Phone Number</span>: {phoneNumber} </p>
                    <p className='pb-2'><span className='font-bold'>Room Size</span>: {roomSize} </p>
                    <p className='pb-2'><span className='font-bold'>Description: </span>: {description} </p>
                </div>
            </div>
        </div>

    </div>
    );
};

export default ViewDetails;