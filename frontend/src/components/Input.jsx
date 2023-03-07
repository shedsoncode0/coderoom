import React from 'react'

function Input({ placeholder, onChange, type, value }) {
   return (
      <>
         <input
            type={type}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            className="w-full p-2 bg-inputBG rounded-lg placeholder:text-inputPlaceholderText font-medium outline-none"
         />
      </>
   )
}

export default Input