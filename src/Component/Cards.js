import Card from './Card';
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { useState } from 'react';


export default function Cards({reviews}){

    const [index, setIndex] = useState(0);

    function prevHandler(){
        if(index - 1 < 0){
            setIndex(reviews.length - 1);
        }
        else{
            setIndex(index - 1);
        }
    };

    function nextHandler(){
        if(index + 1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index + 1);
        }
    };

    return(
        <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
            <div >
              <h1 className='text-4xl font-bold'>Testimonial</h1>
              <div  className='bg-blue-400 h-[4px] w-3/5 mt-1 mx-auto'></div>  
            </div>
            <Card reviews = {reviews[index]}/>
            <div className="flex text-3xl mt-5 gap-3 text-blue-400 font-bold mx-auto text-center">
                <button className='cursor-pointer hover:text-blue-500'
                onClick={prevHandler}>
                    <BsChevronCompactLeft/>
                </button>
                <button className="cursor-pointer hover:text-blue-500"
                onClick={nextHandler}>
                    <BsChevronCompactRight/>
                </button>
            </div>
        </div>
    );
}