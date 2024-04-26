import React from 'react'
import { Link } from 'react-router-dom'
import { PiTranslate } from "react-icons/pi";

const Footer_Alt = () => {
    return (
        <div className='footer f-col gap-6 items-center px-6 py-8 bg-dark'>
          <div className='f-col gap-6 items-start w-5/6 mx-a'>
              <div className="footer__links flex flex-wrap gap-y-4  w-full opacity-80">
                <Link to={'#'} className='!no-underline'>Audio Description</Link>
                <Link to={'#'} className='!no-underline'>Help Center</Link>
                <Link to={'#'} className='!no-underline'>Gift Cards</Link>
                <Link to={'#'} className='!no-underline'>Media Center</Link>
                <Link to={'#'} className='!no-underline'>Investor Reltions</Link>
                <Link to={'#'} className='!no-underline'>Jobs</Link>
                <Link to={'#'} className='!no-underline'>Terms of Use</Link>
                <Link to={'#'} className='!no-underline'>Privacy</Link>
                <Link to={'#'} className='!no-underline'>Legal Notices</Link>
                <Link to={'#'} className='!no-underline'>Cookie Preferences</Link>
                <Link to={'#'} className='!no-underline'>Corporate Information</Link>
                <Link to={'#'} className='!no-underline'>Contact Us</Link>
              </div>
              <button className='btn btn-btdark flex gap-2 opacity-80'>Service Code</button>
              <p className='text-sm text-white/70 opacity-80'>&copy; 1997-2024 Netflix, Inc.</p>
          </div>
      </div>
      )
}

export default Footer_Alt