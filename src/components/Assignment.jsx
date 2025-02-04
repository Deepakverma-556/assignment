import React, { useState } from 'react';
import MyInput from '../common/MyInput';
import { TABLE_HEADING_LIST } from '../utils/helper';
import { toast, ToastContainer, Slide } from 'react-toastify';

const Assignment = () => {
    const [myArray, setMyArray] = useState([]);
    const [mySearch, setMySearch] = useState("");
    const [formValue, setFormValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setMyArray([...myArray, formValue]);
        setFormValue({
            firstName: "",
            lastName: "",
            email: "",
            address: "",
        });
        toast.success("Added Successfully");
    }

    const doesObjectContain = (item) => {
        const searchTerm = mySearch.toLowerCase();
        return (
            item.firstName.toLowerCase().includes(searchTerm) ||
            item.lastName.toLowerCase().includes(searchTerm) ||
            item.email.toLowerCase().includes(searchTerm) ||
            item.address.toLowerCase().includes(searchTerm)
        );
    }

    return (
        <div className='min-h-screen flex-col flex items-center justify-center px-4'>
            <ToastContainer position='top-center' transition={Slide} />
            <form onSubmit={handleSubmit} action="#" className='bg-black flex flex-col px-5 py-3 gap-2 rounded-lg'>
                <h1 className='text-white text-center text-3xl pb-5'>Form</h1>
                <MyInput customOnChange={(e) => setFormValue({ ...formValue, firstName: e.target.value })} myValue={formValue.firstName} customId="firstName" customType="text" myPlaceholder="First Name" />
                <MyInput customOnChange={(e) => setFormValue({ ...formValue, lastName: e.target.value })} myValue={formValue.lastName} customId="lastName" customType="text" myPlaceholder="Last Name" />
                <MyInput customOnChange={(e) => setFormValue({ ...formValue, email: e.target.value })} myValue={formValue.email} customId="email" customType="email" myPlaceholder="Email" />
                <MyInput customOnChange={(e) => setFormValue({ ...formValue, address: e.target.value })} myValue={formValue.address} customId="address" customType="text" myPlaceholder="Address" />
                <button className='bg-white flex max-w-max mx-auto px-4 py-1 rounded-xl'>Add</button>
            </form>
            <input required id='search' onChange={(e) => setMySearch(e.target.value)} value={mySearch} type="text" placeholder='Search' className='px-2 bg-transparent outline-none rounded-lg py-1 border border-black mt-2' />
            <table className='border border-black max-w-[700px] w-full mt-6'>
                <thead>
                    <tr className='text-left'>
                        {TABLE_HEADING_LIST.map((obj, i) => (
                            <th key={i} className='border border-black px-2 py-1'>{obj}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {myArray.filter(doesObjectContain).map(function (item, index) {
                        return <tr key={index}>
                            <td className='border border-black py-1 px-2'>{item.firstName}</td>
                            <td className='border border-black py-1 px-2'>{item.lastName}</td>
                            <td className='border border-black py-1 px-2'>{item.email}</td>
                            <td className='border border-black py-1 px-2'>{item.address}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Assignment;
