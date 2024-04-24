import React from 'react'
import { GoPlus } from "react-icons/go";

const Accordion = ({item}) => {
    const body = item.answer;
    const [active, setActive] = React.useState(false)
    const handleActive = () => setActive(!active)
    
    return (
        <div className="accordion  text-white mb-5">
            <div className="question flex between-center px-4 py-5 border-b border-stone-600 bg-stone-800 hover:bg-stone-700" onClick={handleActive}>
                <h4 className='text-2xl'>{item.question}</h4>
                <GoPlus className={`${active ? "rotate-[225deg]" : "rotate-0"}` + ' text-4xl transition-all duration-500'}/>
            </div>
            <div className={`${active ? "max-h-[500px] mt-[2px]" : "max-h-0"}` + " answer overflow-hidden transition-all duration-500 h-full bg-stone-800"}>
                <div className='p-4' dangerouslySetInnerHTML={{__html: body}}>
                    
                </div>
            </div>
        </div>
    )
}

export default Accordion