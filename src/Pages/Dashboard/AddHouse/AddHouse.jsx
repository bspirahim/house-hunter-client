import React from 'react';

const AddHouse = () => {
    return (
        <div>
           <div className='mt-10 mb-20 container mx-auto w-3/4'>
                <h1 className='text-start text-3xl my-5 font-bold'>Add House</h1>
                <form>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">House Name</span>
                            </label>
                            <input type="text" name='className' className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">House Address</span>
                            </label>
                            <input type="text" name='classImage' className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">City</span>
                            </label>
                            <input type="text" name='classImage' className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Bedrooms</span>
                            </label>
                            <input type="text" name='classImage' className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Bathrooms</span>
                            </label>
                            <input type="text" name='classImage' className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Room Size</span>
                            </label>
                            <input type="text" name='classImage' className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Availability Date</span>
                            </label>
                            <input type="text" name='classImage' className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rent Per Month</span>
                            </label>
                            <input type="text" name='classImage' className="input input-bordered rounded-full" required />
                        </div>
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price </span>
                            </label>
                            <input type="text" name='price' className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" name='price' className="input input-bordered rounded-full" required />
                        </div>
                        
                    </div>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='price' className="input input-bordered rounded-full" required />
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