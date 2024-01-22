import React from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import banner from '../../../../../public/banner/hero.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <section className=" bg-[#E7F6ED]">
            <div className="grid md:grid-cols-2 max-w-screen-lg mx-auto">
                <div className=" w-11/12 my-auto md:py-10">
                    <h1 className="text-5xl font-extrabold leading-normal">Find Your <span className="text-[#16A34A]">Perfect <br /> &amp; Wonderful </span>
                        Home</h1>
                    <p className="leading-7 text-slate-400 py-7 font-semibold text-lg">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                    <div className='my-5'>
                    <Tabs className="Tabs">
                    <TabList className='flex'>
                        <Tab>Buy</Tab>
                        <Tab>Sell</Tab>
                        <Tab>Rent</Tab>
                    </TabList>
                </Tabs>
                    </div>
                    <form>
                        <label htmlFor="search" className="mb-2 text-sm font-medium text-green-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="search" className="block w-full p-4 ps-10 text-sm rounded-md text-green-900 border border-gray-300 bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-white dark:border-green-600 dark:placeholder-green-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Search" required />
                            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#16a34a] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-[#16a34a] dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>
                        </div>
                    </form>
                </div>
                <div className>
                    <img className="border-8 rounded-tl-full rounded-tr-full w-11/12 mx-auto" src={banner} alt />
                </div>
            </div>
        </section>

    );
};

export default Banner;