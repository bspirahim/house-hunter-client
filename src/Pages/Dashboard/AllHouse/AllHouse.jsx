
import AllHousesTable from './AllHousesTable';
import { useEffect, useState } from 'react';

const AllHouse = () => {
   const [houses, setHouses] = useState([]);

   useEffect(()=>{
    fetch('http://localhost:5000/house')
    .then(res => res.json())
    .then(data => setHouses(data))
   },[])
   
    return (
        <div>
            <div className='uppercase font-semibold flex justify-evenly items-center h-[60px]'>
                <h3 className='text-3xl'>Total Houses: {houses?.length}</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th className='text-center'>Image</th>
                            <th className='text-center'>House Name</th>
                            <th className='text-center'>House Address</th>
                            <th className='text-center'>city</th>
                            <th className='text-center'>Rent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {houses.map((item) => <AllHousesTable
                            key={item._id}
                            item={item}

                            
                        ></AllHousesTable>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllHouse;