import React from 'react'
import "./HighlightText.css"
const HighlightText = ({text}) => {
  return (
      <span className='font-bold text-[#67e8f9] drop-shadow transition-transform'>
      {" "}
    {text}
   </span>
  )
}

export default HighlightText