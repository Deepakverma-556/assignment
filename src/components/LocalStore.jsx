import React, { useEffect, useState } from 'react'
import MyInput from '../common/MyInput';

const LocalStore = () => {
    const [formValue, setFormValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
    });
    const [output, setoutput] = useState([])
    useEffect(() => {
        const storeData = localStorage.getItem('items')
        if (storeData) {
            setoutput(JSON.parse(storeData))
        }
    })
    function handleClick(e) {
        e.preventDefault();
        setoutput([...output, formValue])
        localStorage.setItem('items', JSON.stringify([...output, formValue]))
        setFormValue({
            firstName: "",
            lastName: "",
            email: "",
            address: "",
        })
    }
    function deleteData() {
        setoutput([])
        localStorage.removeItem('items');
    }

    return (
        <div className='min-h-screen flex items-center justify-center flex-col'>
            <form onSubmit={handleClick} action="#" className='bg-black flex flex-col px-5 py-3 gap-2 rounded-lg'>
                <h1 className='text-white text-center text-3xl pb-5'>Form</h1>
                <MyInput customOnChange={(e) => setFormValue({ ...formValue, firstName: e.target.value })} myValue={formValue.firstName} customId="firstName" customType="text" myPlaceholder="First Name" />
                <MyInput customOnChange={(e) => setFormValue({ ...formValue, lastName: e.target.value })} myValue={formValue.lastName} customId="lastName" customType="text" myPlaceholder="Last Name" />
                <MyInput customOnChange={(e) => setFormValue({ ...formValue, email: e.target.value })} myValue={formValue.email} customId="email" customType="email" myPlaceholder="Email" />
                <MyInput customOnChange={(e) => setFormValue({ ...formValue, address: e.target.value })} myValue={formValue.address} customId="address" customType="text" myPlaceholder="Address" />
                <button type='submit' className='bg-white flex max-w-max mx-auto px-4 py-1 rounded-xl'>Add</button>
            </form>
            {output.map((item, index) => {
                return (
                    <table className='space-2 mt-4 border border-solid rounded-xl max-w-[400px] w-full border-black flex p-5' key={index}>
                        <tbody className='flex flex-col gap-y-2'>
                            <tr>
                                <th className='text-left'>First Name :</th>
                                <td className='text-left'>{' '}{item.firstName}</td>
                            </tr>
                            <tr>
                                <th className='text-left'>Last Name : </th>
                                <td className='text-left'>{' '}{item.lastName}</td>
                            </tr>
                            <tr>
                                <th className='text-left'>Email : </th>
                                <td className='text-left'>{' '}{item.email}</td>
                            </tr>
                            <tr>
                                <th className='text-left'>Address : </th>
                                <td className='text-left'>{' '}{item.address}</td>
                            </tr>
                        </tbody>
                    </table>
                )
            })}
            <button onClick={deleteData} className='bg-black text-white mt-2 flex max-w-max mx-auto px-4 py-1 rounded-xl'>delete</button>
        </div>
    )
}

export default LocalStore