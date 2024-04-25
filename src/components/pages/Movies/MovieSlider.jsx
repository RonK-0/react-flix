import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { baseImgUrl } from '../../helpers/functions-general';

const MovieSlider = ({setMovieInfo, movies, setMovieData, grouping, sliderHeader}) => {
    const handleShowMovieInfo = (movie) => {
        setMovieData(movie)
        setMovieInfo(true)
    }

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <PiCaretRightBold />
            </div>
        );
      }
      
      function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <PiCaretLeftBold />
            </div>
        );
      }
    var settings = {
        dots: true,
        centerMode: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],

        appendDots: dots => (
            <div
              style={{
                backgroundColor: "transparent",
                padding: "0px"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
    };

    const getGroupings = movies.filter((movie) => movie.movie_category === grouping)

    return (
        <>
            <div className="relative mb-5">
                <h3 className='text-3xl mb-5'>{sliderHeader}</h3>
                <Slider {...settings}>
                    {getGroupings.map((movie, key) => (
                        <div key={key}>
                            <button className='relative' onClick={() => handleShowMovieInfo(movie)}>
                                <img src={`${baseImgUrl}/${movie.img}`} alt="" className='w-[320px] h-[200px] bg-cover object-cover' />
                                <span className='px-2 py-1 rounded-tl-md rounded-tr-md absolute bottom-0 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs'>Recently Added</span>
                            </button>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default MovieSlider