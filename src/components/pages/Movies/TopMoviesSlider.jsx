import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { baseImgUrl } from '../../helpers/functions-general';

const TopMoviesSlider = ({setMovieInfo, movies, setMovieData, grouping, sliderHeader}) => {
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
        centerMode: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 900,
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
            <div className="relative mb-5 topSlider">
                <h3 className='text-3xl mb-5'>{sliderHeader}</h3>
                <Slider {...settings}>
                    {getGroupings.map((movie, key) => (
                        <div key={key}>
                            <button className='flex items-center w-full overflow-y-clip' onClick={() => handleShowMovieInfo(movie)}>
                                <span className='text-[230px] text-black text-shadow-top_num_shadow tracking-[-2.75rem] leading-none font-bold z-[-1] -mr-1'>{key+1}</span>
                                {/* <img src={`${baseImgUrl}/movies/top_10_num/${key+1}.png`} alt="" className='size-[250px] aspect-square mr-[-50px]' /> */}
                                <img src={`${baseImgUrl}/${movie.img}`} alt="" className='!max-w-[125px] !w-full h-[200px] object-cover z-[1]' />
                            </button>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default TopMoviesSlider