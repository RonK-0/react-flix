import React from 'react'
import { FaPlay, FaPlusCircle } from 'react-icons/fa'

const MovieRelatedCard = ({item}) => {
  return (
    <>
        <div className='related_card bg-[#333] rounded-sm group'>
            <div className="relative">
                <span className='absolute top-2 right-2 text-xs'>1h 30m</span>

                <button className='absolute txy-a rounded-full ring-2 ring-white w-11 h-11 f-col-center bg-black opacity-0 group-hover:opacity-100 transition-all pointer z-50'>
                    <FaPlay className='text-3xl'/>
                </button>

                <img src="https://via.placeholder.com/200x160" alt="" className='w-full h-[150px] object-cover opacity-80' />
            </div>
            <div className="related_card_info p-2">
                <div className='flex between-center mb-5'>
                    <ul className='flex items-center gap-2'>
                        <li><span className='px-1 py-0.5 border border-white rounded-sm'>15+</span></li>
                        <li className='text-[10px] px-1 border border-white rounded-sm'><span>HD</span></li>
                        <li className='text-xs'><span>2021</span></li>
                    </ul>
                    <button><FaPlusCircle className='text-3xl'/></button>
                </div>
                <p className='text-sm line-clamp-5 text-ellipsis text-balance'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus culpa exercitationem, veniam eius nobis id quod fugit corrupti aperiam deleniti.</p>
            </div>
        </div>
    </>
  )
}

export default MovieRelatedCard