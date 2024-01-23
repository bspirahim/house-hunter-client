
import { Link } from 'react-router-dom';

const AllHousesTable = ({item}) => {
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
        
    </tr>
    );
};

export default AllHousesTable;