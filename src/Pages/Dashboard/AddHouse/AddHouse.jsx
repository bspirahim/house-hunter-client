
import Swal from 'sweetalert2'


const AddHouse = () => {

    const handleAddHouse = event => {
        event.preventDefault();
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

       const newHouse = {houseName, houseAddress,image,  city, bedrooms, bathrooms, roomSize, date, rentPerMonth,  description}

       console.log(newHouse);
       fetch('http://localhost:5000/house', {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(newHouse)
       })
       .then(res => res.json())
       .then(data => {
          if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'House added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
          }
       })
    }

    return (
        <div>
            <div className='mt-10 mb-20 container mx-auto w-3/4'>
                <h1 className='text-start text-3xl my-5 font-bold'>Add House</h1>
                <form onSubmit={handleAddHouse} >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">House Name</span>
                            </label>
                            <input type="text" name='houseName' className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">House Address</span>
                            </label>
                            <input type="text" name='houseAddress' className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">City</span>
                            </label>
                            <input type="text" name='city' className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Bedrooms</span>
                            </label>
                            <input type="text" name='bedrooms' className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Bathrooms</span>
                            </label>
                            <input type="text" name='bathrooms' className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Room Size</span>
                            </label>
                            <input type="text" name='roomSize' className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Availability Date</span>
                            </label>
                            <input type="date" name='date' className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rent Per Month</span>
                            </label>
                            <input type="text" name='rentPerMonth' className="input input-bordered rounded-full" required />
                        </div>

                       

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">House Image </span>
                            </label>
                            <input type="text" name='image' className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" name='phoneNumber' className="input input-bordered rounded-full" required />
                        </div>
                      

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name='description' className="input input-bordered rounded-full" required />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className='btn btn-primary rounded-full text-white' value="Save" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddHouse;