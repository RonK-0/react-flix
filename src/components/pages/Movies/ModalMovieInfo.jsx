import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general';
import { movies } from './data';
import MovieRelatedCard from './MovieRelatedCard';
import { FaPlay, FaPlusCircle, FaThumbsUp, FaTimesCircle } from "react-icons/fa";

const ModalMovieInfo = ({setMovieInfo, movieData}) => {
    const handleClose = () => setMovieInfo(false)
    const getRelatedGenre = movies.filter((movie) => movie.genre === movieData.genre && movie.title !==movieData.title).slice(0,6);
    return (
        <>
            <div className='modal_movie_info fixed top-0 left-0 isolate w-full h-screen'>
                <div className="backdrop absolute top-0 left-0 h-full w-full bg-black/50 z-[-1]"></div>
                <main className='max-w-[900px] w-full bg-[#141414] absolute txy-a z-[9999] h-full my-2 overflow-y-auto custom-scroll'>
                    <div className='modal__banner'>
                        <div className="relative">
                            <img src={`${baseImgUrl}/${movieData.img}`} alt="" className='opacity-80 w-full h-[400px] object-cover aspect-auto'/>
                            
                            <button type="button" className='absolute top-4 right-4 text-[#141414] text-3xl invert' onClick={handleClose}><FaTimesCircle/></button>

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
                                    <p className='text-sm flex items-center gap-2 mb-2'><span className='text-green-400'>{movieData.status}</span> <span>{movieData.year}</span> <span>{movieData.length}</span> <span className='p-0.5 border border-white/70 text-xs rounded-[4px]'>{movieData.resolution}</span></p>

                                    <p className='p-1 border border-white/70 inline rounded-[4px] text-sm'>{movieData.rating}</p>
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

                    <h5 className='px-4 mt-2 mb-1 text-xl leading-none'>More like this</h5>

                    <div className="movie_related_cards p-4 h-2/6 overflow-y-auto overflow-x-hidden custom-scroll mt-4">
                        <div className='grid grid-cols-3 gap-4'>
                            {getRelatedGenre.map((item,key) => <MovieRelatedCard item={item} key={key}/>)}
                        </div>
                    </div>

                </main>
            </div>
        </>
    )
}

export default ModalMovieInfo