import React,{useState} from 'react'
import reviews from '../utils/data'
import styled from 'styled-components'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";




const Reviews = () => {
    let [reviewData,setReviewData]=useState(reviews)
    let [active,setActive]=useState(0)

    let {id,name,job,image,text}=reviewData[active]

    let increase=()=>
    {
        if(active>=3)
        {
            setActive(0)
            return
        }
        setActive(active+1)
    }
    let decrease=()=>
    {
        if(active<=0)
        {
            setActive(reviewData.length-1)
            return
        }
        setActive(active-1)
    }


    let thunderBolt=()=>
    {
        setActive(Math.floor(Math.random()*4))
    }
  return (
    <StyledReview>
      <main className="bg-gray-50 h-screen w-[100vw] overflow-x-hidden flex items-center justify-center select-none">
        <section className="max-w-[550px] w-[90vw] h-auto bg-white px-4 py-8 rounded-md shadow-lg text-center leading-8">
          <div className="backlash w-[150px] h-[150px] mx-auto rounded-full z-20 shadow-md">
            <img
              src={image}
              className="w-full h-full object-cover rounded-full z-20"
              alt=""
            />
          </div>
          <h2 className="capitalize mt-4 text-2xl tracking-wider">{name}</h2>
          <h4 className="my-2 mt-1 text-blue-600 uppercase">{job}</h4>
          <p className="leading-6">{text.slice(0, 160)}</p>
          <aside className="flex mx-auto max-w-[80px] w-[40%] py-1 justify-between my-3">
            <div className="portside">
              <IoIosArrowBack
                size={25}
                onClick={decrease}
                role='decrease'
                className="cursor-pointer text-blue-600 font-bold hover:scale-110"
              />
            </div>
            <div className="starboard">
              <IoIosArrowForward
                size={25}
                onClick={increase}
                role='increase'
                className="cursor-pointer text-blue-600 font-bold hover:scale-110"
              />
            </div>
          </aside>
          <button
            onClick={thunderBolt}
            className="bg-blue-500 px-4 py-[0.15rem] mt-2 text-white rounded-sm flex justify-center items-center mx-auto shadow-md hover:bg-blue-600 transition-all"
          >
            Thunder Bolt &nbsp; <AiFillThunderbolt />
          </button>
        </section>
      </main>
    </StyledReview>
  );
}


let StyledReview=styled.section`
    .backlash
    {
        position: relative;
        z-index: 10;
    }
    .backlash::before 
    {
        content: "";
        position: absolute;
        top:46%;
        left:55%;
        transform: translate(-50%,-50%);
        width: 150px;
        height: 150px;
        background-color: blue;
        z-index: -1;
        border-radius: 50%;
    }
`

export default Reviews