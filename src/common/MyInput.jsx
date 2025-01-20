import React from 'react'

const MyInput = ({ myPlaceholder, myValue, customId, customOnChange, customType }) => {
    return (
        <input type={customType} placeholder={myPlaceholder} onChange={customOnChange} value={myValue} id={customId} required className='outline-none border border-black rounded-xl py-2 text-black px-3' />
    )
}

export default MyInput