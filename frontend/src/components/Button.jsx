import React from 'react'

function Button({ onClick, type, title }) {
   return (
      <>
         <button onClick={onClick} type={type} className='w-full bg-mainBlue text-white font-semibold py-2 rounded-lg flex justify-center items-center'>
            {title}
         </button>
      </>
   )
}

export default Button