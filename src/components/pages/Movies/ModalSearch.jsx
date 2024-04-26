import React from 'react'
import { movies } from './data';
import { FaSearch, FaTimesCircle } from "react-icons/fa";
import { CiSquareQuestion } from "react-icons/ci";
import { baseImgUrl } from '../../helpers/functions-general';

const ModalSearch = ({setSearch}) => {
    // const handleClose = (e) => {
    //     if(e.key === "Escape"){
    //         setSearch(false)
    //     }
    // }
    document.body.addEventListener('keydown', function(e) {
        if (e.key == "Escape") {
          setSearch(false)
        }
    });

    const [result, setResult] =React.useState([])
    const [keyword, setKeyword] = React.useState('')

    const handleKeyword = (e) => setKeyword(e.target.value)
    const getSearchResult = () => {
        setResult(movies.find(movie => movie.title.toLowerCase() === keyword.toLowerCase()))
        //if(keyword){
            // setResult(movies.filter( movie => {
            //     results = movie.title.toLowerCase().includes(keyword.toLowerCase())
            // } ) )
        //}
        console.log(result)
    }

    return (
        <>
            <div className='searchModal fixed top-0 left-0 isolate w-full h-screen'>
                <div className="backdrop absolute top-0 left-0 h-full w-full bg-black/50 z-[-1]"></div>
                <main className='max-w-[700px] w-full bg-dark absolute tx-a top-[180px] z-[9999] my-2 overflow-y-auto custom-scroll rounded-lg min-h-[80px] h-fit max-h-[70vh]'>
                    <div className="relative p-2 w-full">
                        <input type="text" className='w-full outline-none border-b border-stone-500 focus:border-accent px-4 py-3 bg-transparent text-white  placeholder:opacity-30' placeholder='Search ...' onChange={(e)=> handleKeyword(e)} />
                        <button className='absolute ty-a right-6 text-white' onClick={getSearchResult}><FaSearch/></button>
                    </div>
                    {/* {
                        (result.length != 0 ?
                            (
                                <div className="result p-3">
                                    <h3 className='ft-b mb-5 text-[#454545]'>Results for keyword: <span className='text-white'>{`${keyword}`}</span></h3> 
                                    <div className="grid grid-cols-[1fr_2.5fr] gap-5">
                                        <img src={`${baseImgUrl}/${result.img}`} alt="" className='w-full h-auto object-cover' />
                                        <div>
                                            <ul className='space-y-1'>
                                                <li className='flex items-center gap-2'>{result.title} <span className='p-0.5 border border-white text-[10px]'>{result.rating}</span> <span className='p-0.5 border border-white text-[8px]'>{result.resolution}</span> <span className='text-xs'>{result.year}</span>    </li>
                                                <li>{result.cast}</li>
                                                <li>{result.genre}</li>
                                                <li className='line-clamp-4 text-ellipsis'>{result.description}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ) :
                            (
                                <div className="result-none py-8 flex flex-col items-center opacity-20">
                                    <CiSquareQuestion className='text-9xl mb-5' />
                                    <h3 className='text-2xl'>No Movie Found!</h3>
                                </div>
                            )
                        )
                    } */}
                </main>
                <button type="button" className='absolute top-4 right-4 text-[#141414] text-3xl invert' onClick={()=>setSearch(false)}><FaTimesCircle/></button>
            </div>
        </>
    )
}

export default ModalSearch