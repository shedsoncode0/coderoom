import React from 'react'

import Button from "../Button"
import { SlArrowDown } from 'react-icons/sl'

function language() {
  return (
    <div className='p-5'>
            <h1 className='py-3 font-semibold text-xl text-Dark'>Language</h1>
            <div className='flex flex-col space-y-3'>
                <h2 className='font-medium text-Dark text-lg'>Show DevRoom in this language</h2>
                <div>
                    <div className="px-4 py-3 border-[2px] border-Stroke rounded-md max-w-[200px] flex justify-between items-center">
                        <h1 className='text-TextColor font-medium'>English (US)</h1>
                        <SlArrowDown />
                    </div>
                </div>
                <div className='flex w-full space-x-5'>
                    <div className='max-w-[100px] w-full'>
                        <Button title="Cancle" />
                    </div>
                    <div className='max-w-[100px] w-full'>
                        <Button title="Save" />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default language