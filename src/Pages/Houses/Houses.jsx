import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Houses = () => {
    const [houses, setHouses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/house/')
            .then(res => res.json())
            .then(data => setHouses(data))
    }, [])
    console.log(houses);
    return (
        <section className='max-w-screen-lg mx-auto my-16'>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    houses.map(house =>

                        <>
                            <div className="w-auto rounded-lg  bg-white shadow-xl h-auto flex flex-col justify-between">
                                <div className='relative rounded-lg'>
                                    <figure className='w-full rounded overflow-hidden'>
                                        <img className='rounded object-cover transition duration-300 ease-in-out hover:scale-110 h-[350px] md:h-[250px] xl:h-[350px] bg-gray-400 w-full' src={house?.image} alt="Shoes" />
                                    </figure>

                                    <div>
                                        <div className='flex items-center justify-between p-4 absolute w-full bottom-0 '>
                                            <h4 className='text-2xl text-white font-bold bg-gray-400/70 rounded p-1'>${house?.rentPerMonth}</h4>

                                        </div>


                                    </div>
                                </div>
                                <div className="card-body justify-between">
                                   
                                    <h2 className="card-title">
                                        {house?.houseName}
                                    </h2>

                                    <div className='flex items-center'>
                                        <span className='pe-1'><FaMapMarkerAlt></FaMapMarkerAlt></span>
                                        <span className='text-gray-500'>{house?.houseAddress},{house?.city} </span>
                                    </div>
                                    <div className='flex items-center flex-wrap justify-between text-center p-2 my-2 bg-slate-100 '>

                                        <li className='list-none flex items-center'>
                                            <img src="../../public/images/icon/bed-icon.svg" alt="" />
                                            {house?.bedrooms}Beds
                                        </li>
                                        <li className='list-none flex items-center'>
                                            <img src="../../public/images/icon/bath-icon.svg" alt="" />
                                            {house?.bathrooms}Baths
                                        </li>
                                        <li className='list-none flex items-center'>
                                            <img src="../../public/images/icon/building-icon.svg" alt="" />
                                            {house?.roomSize}
                                        </li>


                                    </div>
                                    <hr />


                                    <div className="">
                                        <Link to={`/house/${house?._id}`} className="btn hover:text-black bg-primary text-white font-semibold text-lg w-full capitalize">view Detail</Link>
                                    </div>

                                </div>
                            </div>
                        </>


                    )
                }

            </div >
        </section>
    );
};

export default Houses;