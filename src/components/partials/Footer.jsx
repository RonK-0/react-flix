import React from 'react'
import { Link } from 'react-router-dom'
import { PiTranslate } from "react-icons/pi";

const Footer = () => {
  return (
    <div className='footer border-t-[#333] border-t-8 f-col gap-6 items-center px-6 py-8 bg-black'>
      <div className='f-col gap-6 items-start'>
        <Link to={'#'} className=''>Questions? Contact Us.</Link>
        <div className="footer__links flex flex-wrap  gap-y-4">
          <Link to={'#'}>FAQ</Link>
          <Link to={'#'}>Help Center</Link>
          <Link to={'#'}>Account</Link>
          <Link to={'#'}>Media Center</Link>
          <Link to={'#'}>Investor Relations</Link>
          <Link to={'#'}>Jobs</Link>
          <Link to={'#'}>Redeem Gift Cards</Link>
          <Link to={'#'}>Buy Gift Cards</Link>
          <Link to={'#'}>Ways to Watch</Link>
          <Link to={'#'}>Terms of Use</Link>
          <Link to={'#'}>Privacy</Link>
          <Link to={'#'}>Cookie Preferences</Link>
          <Link to={'#'}>Corporate Information</Link>
          <Link to={'#'}>Contact Us</Link>
          <Link to={'#'}>Speed Test</Link>
          <Link to={'#'}>Legal Notices</Link>
          <Link to={'#'}>Only on Netflix</Link>
        </div>
        <button className='btn btn-btdark flex gap-2'><PiTranslate /> English</button>
        <p className='text-sm text-white/70'>Netflix Philippines</p>
      </div>
    </div>
  )
}

export default Footer