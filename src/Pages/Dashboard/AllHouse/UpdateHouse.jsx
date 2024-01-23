
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../Provider/AuthProvider';
import { useContext } from "react";

const UpdateHouse = () => {
    const data = useLoaderData()
    console.log(data);
    const navigate = useNavigate()
    const { handleLogout } = useContext(AuthContext);

    const handleUpdateHouse = event => {
        event.preventDefault()
        const form = event.target;
        const houseName = form.houseName.value;
        const houseAddress = form.houseAddress.value;
        const city = form.city.value;
        const bedrooms = form.bedrooms.value;
        const bathrooms = form.bathrooms.value;
        const roomSize = form.roomSize.value;
        const date = form.date.value;
        const image = form.image.value;
        const rentPerMonth = form.rentPerMonth.value;
        const description = form.description.value;
        const phoneNumber = form.phoneNumber.value;

        const UpdateHouse = { houseName, houseAddress, image, city, bedrooms, bathrooms, roomSize, date, rentPerMonth, description, phoneNumber }

        fetch('http://localhost:5000/house/', {
            method: 'PUT',
            body: JSON.stringify(UpdateHouse),
            headers: {
                'content-type': 'application/json',
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
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Successfully Updated the class',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                navigate("/owner-dashboard/all-house", { replace: true })
            })
            .catch(error => {
                alert.error(error.message);
            });
    }
    return (
        <div>
            <div className='mt-10 mb-20 container mx-auto w-3/4'>
                <h1 className='text-start text-3xl my-5 font-bold'>Update House</h1>
                <form onSubmit={handleUpdateHouse} >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">House Name</span>
                            </label>
                            <input type="text" name='houseName' defaultValue={data.houseName} className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">House Address</span>
                            </label>
                            <input type="text" name='houseAddress' defaultValue={data.houseAddress} className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">City</span>
                            </label>
                            <input type="text" name='city' defaultValue={data.city} className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Bedrooms</span>
                            </label>
                            <input type="text" name='bedrooms' defaultValue={data.bedrooms} className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Bathrooms</span>
                            </label>
                            <input type="text" name='bathrooms' defaultValue={data.bathrooms} className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Room Size</span>
                            </label>
                            <input type="text" name='roomSize' defaultValue={data.roomSize} className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Availability Date</span>
                            </label>
                            <input type="date" name='date' defaultValue={data.date} className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rent Per Month</span>
                            </label>
                            <input type="text" name='rentPerMonth' defaultValue={data.rentPerMonth} className="input input-bordered rounded-full" required />
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">House Image </span>
                            </label>
                            <input type="text" name='image' defaultValue={data.image} className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" name='phoneNumber' defaultValue={data.phoneNumber} className="input input-bordered rounded-full" required />
                        </div>


                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name='description' defaultValue={data.description} className="input input-bordered rounded-full" required />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className='btn btn-primary rounded-full text-white' value="Update" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateHouse;