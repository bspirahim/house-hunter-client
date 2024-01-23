
import { Link } from 'react-router-dom';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

const AllHousesTable = ({item, handleDelete}) => {
console.log(item);
    return (
        <tr>
    
        <td className='text-center'>
            <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                </div>
            </div>
        </td>
        <td className='text-center' ><Link to=''><h2 className='font-bold'>{item.houseName}</h2></Link></td>
        <td className='text-center'>{item.houseAddress}</td>
        <td className='text-center'>{item.city}</td>
        <td className='text-center'>${item.rentPerMonth}</td>
        <th>
                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-700 btn-md text-white text-center"><FaTrashAlt></FaTrashAlt></button>
                
                <Link to={`/owner-dashboard/update-house/${item._id}`}> <button className="btn btn-ghost bg-sky-700 btn-md text-white text-center"><FaPencilAlt></FaPencilAlt></button></Link>
            </th>
        
    </tr>
    );
};

export default AllHousesTable;