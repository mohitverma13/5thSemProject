import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button'
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import Footer from '../components/common/Footer';
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../components/core/HomePage/LearnningLanguageSection";
import InstructorSection from '../components/core/HomePage/InstructorSection';
import ExploreMore from '../components/core/HomePage/ExploreMore'


const Home = () => {
  return (
    <div >
      {/* Section 1 */}
      <div className='relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent'>
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

        <div >
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
            backgroundGradient={
              {
                background: ' linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
                backdropFilter: ' blur(10px)',
                WebkitBackdropFilter: ' blur(10px)',
                borderRadius: '20px',
                // border:' 1px solid rgba(255,255,0,0.18)',
                boxShadow: ' 0 8px 32px 0 rgba(0,0,0,0.37)',
                filter: "drop-shadow(20px 20px 50px rgb(255, 26, 1))",
              }
            }
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
            codecolor={'text-pink-200'}
            backgroundGradient={
              {
                background: ' linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
                backdropFilter: ' blur(10px)',
                WebkitBackdropFilter: ' blur(10px)',
                borderRadius: '20px',
                // border: ' 1px solid rgba(255,255,0,0.18)',
                boxShadow: ' 0 8px 32px 0 rgba(0,0,0,0.37)',
                filter: "drop-shadow(20px 20px 50px rgb(1, 26, 255))",
              }
            }
          />
        </div>

        <ExploreMore/>

      </div>


      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700 mt-10">
        <div className="homepage_bg h-[320px] ">
          <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
            <div className='h-[130px]'></div>
            <div className="flex gap-7 text-white">

              <CTAButton active={true} linkto={"/signup"}>
                <div className='flex items-center gap-2 '>
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>

              <CTAButton active={false} linkto={"/signup"}>
                <div className='flex items-center gap-2 '>
                  Learn More
                  <FaArrowRight />
                </div>
              </CTAButton>

            </div>

          </div>
        </div>

        <div className="mx-auto w-11/12 flex flex-col items-ceter justify-between max-w-maxContent gap-5">
          <div className='flex gap-4 mb-10 mt-[100px]'>

            <div className='font-semibold text-4xl w-[45%]'>
              Get the Skills you need for a
              <HighlightText text={"job that is in demand"}></HighlightText>
            </div>


            <div className='flex flex-col gap-10 w-[45%] items-start'>
              <div className='text-[16px]'>
                The modern StudyNotion is the dictates its own terms. today, to be a competitive specialist
                requies more than professionl Skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div>
                  Learn More
                </div>
              </CTAButton>

            </div>

          </div>


          <TimelineSection />

          <LearningLanguageSection />

        </div>




      </div>



      {/* Section 3 */}
      <div className='flex flex-col w-11/12 mx-auto max-w-maxContent items-center 
      justify-between gap-8 first-letter bg-richblack-900 text-white'>
        
        <InstructorSection />

        <h2 className='text-center text-4xl font-semibold mt-10'>Review from Other learners</h2>

        {/* Review slides */}

      </div>


      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Home