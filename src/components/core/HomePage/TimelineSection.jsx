import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"

import timelineImage from "../../../assets/Images/TimelineImage.png"


const timeline=[
    {
    Logo: Logo1,
    Heading:"Leadership",
    Description:"Fully commited to the success company",
    },
    {
    Logo: Logo2,
    Heading:"Leadership",
    Description:"Fully commited to the success company",
    },
    {
    Logo: Logo3,
    Heading:"Leadership",
    Description:"Fully commited to the success company",
    },
    {
    Logo: Logo4,
    Heading:"Leadership",
    Description:"Fully commited to the success company",
    },
]

const TimelineSection = () => {
    return (
        <div>
            <div className='flex flex-row gap-15 items-center'>
                {/* left box */}
                <div className='w-[45%] flex flex-col gap-5'>
                {
                    timeline.map((element,index)=>{
                        return(
                            <div className=' flex flex-row gap-5' key={index}>

                                <div className='w-[50px] h-[50px] bg-white flex items-center'>
                                    <img src={element.Logo} alt="" />
                                </div>

                                <div>
                                    <h2 className='font-semibold text-[16px]'>{element.Heading} </h2>
                                    <p className='text-base'>{element.Description}</p>
                                </div>

                            </div>
                        )
                    })
                }
                </div>


                {/* rightt box */}
                <div className="relative shadow-blue-200">
                    <img 
                    src={timelineImage} alt="TimelineImage" 

                    className='shadow-white object-cover h-fit '
                    />
 
                    <div className="absolute bg-caribbeangreen-700 flex  text-white uppercase py-8
                                    left-[50%] translate-x-[-50%] translate-y-[-50%]">

                        <div className='flex gap-5 items-center justify-center border-r border-caribbeangreen-300 px-7'>
                           <p className='text-3xl font-bold'>10</p> 
                           <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p> 
                        </div>

                        <div className='flex gap-5 items-center justify-center  px-7'>
                           <p className='text-3xl font-bold'>250</p> 
                           <p className='text-caribbeangreen-300 text-sm'>Types of Courses</p> 
                        </div>  

                    </div>
                </div>

            </div>
        </div>
    )
}

export default TimelineSection