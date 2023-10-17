import React from 'react'
import HighlightText from './HighlightText'
import knowyouprogress from '../../../assets/Images/Know_your_progress.png'
import comparewithothers from '../../../assets/Images/Compare_with_others.png'
import planlesson from '../../../assets/Images/Plan_your_lessons.png'
import CTAButton from './Button'

const LearnningLanguageSection = () => {
    return (
        <div className='mt-[120px] mb-28'>
            <div className='flex flex-col gap-5 items-center'>

                <div className='text-4xl font-semibold text-center'>
                    Your Swiss Knife for
                    <HighlightText text={"learning any language"} />
                </div>

                <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[55%]'>
                    Using spin making learning multiple language easy. with 20+ language realistic voice-over, progress tracking, custom schedule and more.
                </div>

                <div className='flex flex-row items-center justify-start mt-5'>
                    <img
                        src={knowyouprogress} 
                        alt="KnowYourProgressImage" 
                        className='object-contain -mr-32 '
                    />
                    <img
                        src={comparewithothers} 
                        alt="CompareWithOthers" 
                        className='object-contain '
                    />
                    <img
                        src={planlesson} 
                        alt="PlanYourLesson" 
                        className='object-contain -ml-36'
                    />
                </div>

                <div className='w-fit '>
                    <CTAButton active ={true} linkto={"/signup"}>
                    <div>
                        Learn more
                    </div>
                    </CTAButton>
                </div>

            </div>

        </div>
    )
}

export default LearnningLanguageSection