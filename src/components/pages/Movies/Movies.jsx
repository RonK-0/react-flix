import React from 'react'
import { Link } from 'react-router-dom';
import { baseImgUrl } from '../../helpers/functions-general'
import { TbSearch , TbBell, TbCaretDownFilled, TbPlayerPlayFilled, TbInfoCircle  } from "react-icons/tb";
import MovieSlider from './MovieSlider';
import ModalMovieInfo from './ModalMovieInfo';
import { movies } from './data';

const Movies = () => {
    const [showMovieInfo, setMovieInfo] = React.useState(false)
    const [movieData, setMovieData] = React.useState(null)

    return (
        <>
            <div className='bg-[#141414] text-white custom-scroll'>
                <div className={`banner bg-[url(../img/movies/banner-movie.jpg)] bg-cover bg-center h-[90vh] relative isolate`}>
                    <div className="backdrop h-full w-full absolute top-0 left-0 bg-black/30 z-[-1]"></div>
                    <div className="header px-4 py-2 bg-gradient-to-b from-black/70 to-black/0 flex between-center">
                        <div className='flex items-center gap-6'>
                            <img src={`${baseImgUrl}/logo.png`} alt="" className='max-w-[190px]'/>
                            <ul className='flex items-center gap-5'>
                                <li className='nav__link active'><Link to={'#'}>Home</Link></li>
                                <li className='nav__link'><Link to={'#'}>TV Shows</Link></li>
                                <li className='nav__link'><Link to={'#'}>Movies</Link></li>
                                <li className='nav__link'><Link to={'#'}>New & Popular</Link></li>
                                <li className='nav__link'><Link to={'#'}>My List</Link></li>
                                <li className='nav__link'><Link to={'#'}>Browse by Languages</Link></li>
                            </ul>
                        </div>
                        <div className='header__buttons'>
                            <ul className='flex items-center gap-5'>
                                <li><button><TbSearch /></button></li>
                                <li><button><TbBell /></button></li>
                                <li><button className='flex items-center gap-3'><img src="https://via.placeholder.com/50" alt="" className='rounded-md size-[35px]' /> <TbCaretDownFilled /></button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="absolute left-[5%] bottom-[35%]">
                        <h1 className='text-[70px] font-bold text-white'>Bee Movie</h1>
                        <ul className='flex items-center gap-5'>
                            <li><button className='btn flex items-center gap-2 px-6 py-1.5 rounded-md bg-white text-black text-lg ft-sb leading-none hover:bg-accent_hover hover:border-accent_hover hover:text-white'><TbPlayerPlayFilled className='text-2xl' /> Trailer</button></li>
                            <li><button className='btn flex items-center gap-2 px-6 py-1.5 rounded-md bg-stone-600 border-stone-600 text-white text-lg ft-sb leading-none hover:bg-accent_hover hover:border-accent_hover hover:text-white'><TbInfoCircle className='text-2xl' /> More Info</button></li>
                        </ul>
                    </div>
                </div>
                <div className="slider-wrapper px-10 py-20 overflow-x-hidden">
                    <MovieSlider setMovieInfo={setMovieInfo} movies={movies} setMovieData={setMovieData} grouping={'trending'} sliderHeader={'Trending Movies'}/>
                    <MovieSlider setMovieInfo={setMovieInfo} movies={movies} setMovieData={setMovieData} grouping={'western'} sliderHeader={'Western Movies'}/>
                    <MovieSlider setMovieInfo={setMovieInfo} movies={movies} setMovieData={setMovieData} grouping={'asian'} sliderHeader={'Asian Movies'}/>
                </div>
            </div>
            {showMovieInfo && <ModalMovieInfo setMovieInfo={setMovieInfo} movieData={movieData}/>}
        </>
    )
}

export default Movies