import React from 'react'
import { PiCaretRight } from "react-icons/pi";

const EmailForm = () => {
  return (
    <>
        <form action="" className='flex flex-wrap lg:flex-nowrap center gap-3 mt-12 w-full'>
          <div className="input-wrapper mb-0 max-w-[450px] w-full">
            <input type="email" name="Email" id="Email" required/>
            <label htmlFor="Email" >Email or mobile number</label>
          </div>
          <button type='button' className='h-full px-4 p-3 rounded-md btn btn-accent text-2xl text-white flex items-center gap-3 my-0'>Get Started <PiCaretRight /></button>
        </form>
    </>
  )
}

export default EmailForm