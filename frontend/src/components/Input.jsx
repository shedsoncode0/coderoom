import React from 'react'

function Input({ placeholder, onChange, type, value, name, y }) {
   return (
      <>
         <input
            type={type}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            name={name}
            className={`w-full p-2 bg-inputBG rounded-md placeholder:text-inputPlaceholderText font-medium outline-none mt-${y}`}
         />
      </>
   )
}

export default Input