
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { Link, Outlet } from 'react-router-dom';

const OwnerDashboard = () => {
    return (
        <div className=''>
            <Header></Header>
            <div className="drawer lg:drawer-open bg-[#E1F2FF]">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  border-l-8 border-white bg-green-300">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side bg-[#28AF60]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay bg-green-400"></label>
                    <ul className="menu p-4 w-64 h-full border-r-2  text-base-content ">
                        <li><Link to='/owner-dashboard' className="text-lg  mb-2 bg-white">Dashboard</Link></li>



                        <li><Link to='/owner-dashboard/add-house' className="text-lg  mb-2 bg-white">Add House</Link></li>

                        <li><Link to='/owner-dashboard/all-house' className="text-lg  mb-2 bg-white">All House</Link></li>
                    </ul>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default OwnerDashboard;