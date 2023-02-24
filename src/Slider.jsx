import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState } from 'react'
import fruits from "./data";
const Slider = () => {
    const [index, setIndex] = useState(0)
    const {id, name, image, text} = fruits[index]
    const newNumbers = (number) => {
           if(number > fruits.length -1){
              return 0
           }
           else if(number < 0){
              return fruits.length - 1
           }
            return number
    }
    const nextBtn = ()=> {
        setIndex((index) => {
          const newIndex = index + 1
          return newNumbers(newIndex)
        })
    }
    const prevBtn = () => {
        setIndex((index) => {
            const newIndex = index - 1
            return newNumbers(newIndex)
        })
    }
  return (
    <div key={id} className='lg:px-80 sm:p-16'>
        <div className='flex flex-col md:flex-row bg-white p-8 drop-shadow-2xl gap-4'>
            <div>
            <img src={image} alt='' className='w-fit' style={{minWidth: '200px'}}/>
            </div>
        <div>
        <h2 className='text-2xl font-bold'>{name}</h2>
        <p>{text}</p>
        </div>
        <div className="flex p-8 space-x-96 absolute top-72">
           <div className="bg-black text-white rounded-full p-2 ml-24">
              <FaChevronLeft className="text-4xl self-start" onClick={prevBtn}/>
           </div>
           <div  className="bg-black text-white rounded-full p-2 mr-96">
            <FaChevronRight className="text-4xl self-end" onClick={nextBtn}/>
           </div>
        </div>
        </div>

 
    </div>
  )
}

export default Slider
