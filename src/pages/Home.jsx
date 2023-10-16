import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button'
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks';

const Home = () => {
  return (
    <div className='relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent'>
      {/* Section 1 */}
      <div>
        <NavLink to={"/signup"}>

          <div className='btn-1 group mt-20 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>
            <div className=' flex items-center  gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
              <p> Become an Instructor </p>
              <FaArrowRight />
            </div>
          </div>

        </NavLink>
        <div className='text-center text-4xl font-semibold mt-7'>
          Empower Your Future With
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className='w-[90%] mt-4 text-center text-lg font-bold text-richblack-300'>
          With our online coding course, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructor
        </div>

        <div className='flex justify-center flex-row gap-7 mt-8'>

          <CTAButton active={true} linkto={"/signup"} >Learn More</CTAButton>

          <CTAButton active={false} linkto={"/login"}>Book a demo</CTAButton>
        </div>

        <div className='shadow-blue-200 mx-3 my-12'>
          <video
            muted
            autoPlay
            loop
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* code section 1 */}

        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className='text-4xl font-semibold'>
                Unlock your
                <HighlightText text={"coding potential "} />
                with our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about shainng their knowledge ith you"
            }
            ctabtn1={
              {
                btnText: "try it yourself",
                linkto: "/signup",
                active: true
              }
            }
            ctabtn2={
              {
                btnText: "learn more",
                linkto: "/login",
                active: false
              }
            }
            codeblock={`<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8"/>
              <meta name="viewport" content="width=100vw/>
              <title>Document</title>
            </head>
            <body>
              <h2>Hello World</h2>
            </body>
            </html>`}
            codecolor={'text-yellow-5'}
          />
        </div>

        {/* code section 2 */}

        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className='text-4xl font-semibold'>
                Start
                <HighlightText text={`coding  `} />
                in seconds
              </div>
            }
            subheading={
              "Go ahead, gve it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson"
            }
            ctabtn1={
              {
                btnText: "try it yourself",
                linkto: "/signup",
                active: true
              }
            }
            ctabtn2={
              {
                btnText: "learn more",
                linkto: "/login",
                active: false
              }
            }
            codeblock={`<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8"/>
              <meta name="viewport" content="width=100vw/>
              <title>Document</title>
            </head>
            <body>
              <h2>Hello World</h2>
            </body>
            </html>`}
            codecolor={'text-yellow-5'}
          />
        </div>

      </div>
      {/* Section 2 */}

      {/* Section 3 */}

      {/* Footer */}

    </div>
  )
}

export default Home