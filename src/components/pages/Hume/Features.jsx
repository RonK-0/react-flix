import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'

const Features = ({item}) => {
  return (
    <div className='features border-t-8 border-[#222] bg-black py-12'>
        <div className='max-w-[1200px] mx-a px-4'>
            <div className='grid lg:grid-cols-2 gap-5 items-center'>
                <div className="content self-center">
                    <h2 className='text-white text-center lg:text-left text-4xl ft-b mb-5'>{item.header}</h2>
                    <p className='text-white text-center lg:text-left text-xl'>{item.body}</p>
                </div>
                <div className="image justify-self-center">
                    <img src={`${baseImgUrl}/${item.img}`} alt="" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Features