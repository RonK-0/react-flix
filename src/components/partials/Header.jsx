import React from 'react'
import { Link } from 'react-router-dom'
import { baseImgUrl } from '../helpers/functions-general'
import { PiTranslate } from "react-icons/pi";

const Header = ({isLogin}) => {
  return (
    <>
        <header className='py-1 px-2'>
            <div className='max-w-[950px] w-full mx-auto px-4 flex between-center'>
                <img src={`${baseImgUrl}/logo.png`} alt="" className='max-w-[190px]'/>

                {!isLogin && (
                  <ul className='flex gap-4 items-center'>
                      <li><button className='btn btn-btdark flex gap-2'><PiTranslate /> English</button></li>
                      <li><Link to="/Login" className='btn btn-accent ft-md'>Sign In</Link></li>
                  </ul>
                )}
            </div>
        </header>
    </>
  )
}

export default Header