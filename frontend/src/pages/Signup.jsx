import React from 'react'
import Button from '../components/Button';
import Input from '../components/Input';
import svgImage from '../assets/images/signup.svg';

function Signup() {
   return (
      <div className='w-full flex bg-slate-500 h-screen'>
         <div className='flex-1 bg-white flex justify-center items-center'>
            <form className='flex flex-col gap-3 items-center max-w-[400px] w-full px-3' action="">
               <h2 className='text-xl font-bold'>Create Account</h2>
               <h2>Already have an account? <span className='text-mainBlue'>Sign in</span></h2>
               <Button title={"Sign up with Google"} />
               <div className='w-full h-9 relative flex justify-center items-center'>
                  <div className='w-full h-[2px] bg-slate-300 rounded-lg'></div>
                  <div className='p-1 absolute bg-white rounded-full text-sm'>OR</div>
               </div>
               <div className='w-full flex justify-between gap-3'>
                  <Input
                     placeholder="Fist Name"
                     type="text"
                  />
                  <Input
                     placeholder="Last Name"
                     type="text"
                  />
               </div>
               <div className='mt-2 flex flex-col w-full gap-3'>
                  <Input
                     placeholder="Email"
                     type="text"
                  />
                  <Input
                     placeholder="Password"
                     type="text"
                  />
                  <Input
                     placeholder="Where did you hear about us"
                     type="text"
                  />
                  <Button title="Sign up" />
               </div>
            </form>
         </div>
         <div className='flex-1 bg-white hidden md:flex justify-center items-center'>
            <img src={svgImage} alt="image" />
         </div>
      </div>
   )
}

export default Signup