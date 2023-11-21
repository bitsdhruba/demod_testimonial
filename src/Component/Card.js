import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


export default function Card({reviews}){
    return (
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-10 mx-auto ">
                <img src= {reviews.image} alt="" className="aspect-square rounded-full w-[140px] h-[140px] z-25"></img>
                <div className="w-[140px] h-[140px] bg-blue-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
            </div>
            <div className="text-center mt-7"> 
                <h1 className="font-bold text-2xl capitalize leading-3">{reviews.name}</h1>
            </div>
            <div className="text-center mt-4">
                <h2 className="text-blue-400 text-sm uppercase">{reviews.job}</h2>
            </div>
            <div className="text-blue-400 mx-auto mt-5">
                <FaQuoteLeft/>
            </div>
            <div className="text-center mt-4 text-slate-500 ">
                <p>{reviews.text}</p>
            </div >
            <div className="text-blue-400 mx-auto mt-5">
                <FaQuoteRight/>
            </div>
        </div>
    );
}