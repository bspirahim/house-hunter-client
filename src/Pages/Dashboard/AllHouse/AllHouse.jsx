import Swal from 'sweetalert2';
import AllHousesTable from './AllHousesTable';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const AllHouse = () => {
    const [houses, setHouses] = useState([]);

    const { handleLogout } = useContext(AuthContext);
    useEffect(() => {
        fetch('http://localhost:5000/house')
            .then(res => res.json())
            .then(data => setHouses(data))
    }, [])

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/house/${item._id}`, {
                    method: 'DELETE',
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                })
                    .then((res) => {
                        if (res.status === 401 || res.status === 403) {
                            return handleLogout();
                        }
                        return res.json();
                    })
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = houses.filter(cls => cls._id !== item._id);
                            setHouses(remaining);
                        }
                    })
            }
        })
    }


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
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {houses.map((item) => <AllHousesTable
                            key={item._id}
                            item={item}
                            handleDelete={handleDelete}

                        ></AllHousesTable>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllHouse;