import React from 'react'
import { FaPlay, FaPlusCircle, FaThumbsUp, FaTimesCircle } from "react-icons/fa";
import { baseImgUrl } from '../../helpers/functions-general';

const ModalMovieInfo = ({setMovieInfo, movieData}) => {
    const handleClose = () => setMovieInfo(false)
    return (
        <>
            <div className='modal_movie_info fixed top-0 left-0 isolate w-full h-screen'>
                <div className="backdrop absolute top-0 left-0 h-full w-full bg-black/20 z-[-1]"></div>
                <main className='max-w-[700px] w-full bg-[#141414] absolute txy-a z-[9999] max-h-[700px] h-full'>
                    <div className='modal__banner'>
                        <div className="relative">
                            <img src={`${baseImgUrl}/${movieData.img}`} alt="" className='opacity-80 w-full max-h-[550px] object-contain'/>
                            <button type="button" className='absolute top-4 right-4 text-[#141414] invert' onClick={handleClose}><FaTimesCircle/></button>
                            <div className='absolute left-[20px] bottom-[20px] z-10'>
                                <h2 className='text-4xl mb-5'>{movieData.title}</h2>
                                <ul className='flex items-center gap-2 text-white'>
                                    <li><button className='py-1 px-3 text-[#141414] flex items-center gap-2 bg-white rounded-md text-sm'><FaPlay/> Play</button></li>
                                    <li><button className=''><FaPlusCircle/></button></li>
                                    <li><button className=''><FaThumbsUp/></button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="modal__content movie__info p-4 grid grid-cols-[3fr_1fr] gap-5 relative">
                            <div className="info">
                                <div className="duration mb-6">
                                    <p className='text-sm flex items-center gap-2 mb-0'><span className='text-green-400'>{movieData.status}</span> <span>{movieData.year}</span> <span>{movieData.length}</span> <span className='p-0.5 border border-white/70 text-xs rounded-sm'>{movieData.resolution}</span></p>
                                    <p className='p-0.5 border border-white/70 inline rounded-sm text-xs'>{movieData.rating}</p>
                                </div>
                                <p>{movieData.description}</p>
                            </div>
                            <ul>
                                <li className='text-stone-200 mb-3 text-xs'><span className='text-stone-400 opacity-80'>Cast </span>{movieData.cast}</li>
                                <li className='text-stone-200 mb-3 text-xs'><span className='text-stone-400 opacity-80'>Genres </span>{movieData.genres}</li>
                                <li className='text-stone-200 mb-3 text-xs'><span className='text-stone-400 opacity-80'>This Movie is: </span>{movieData.type}</li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default ModalMovieInfo