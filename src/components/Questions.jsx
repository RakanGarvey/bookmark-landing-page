import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Questions = ({title,info}) => {
  const [isShown,setIsShown] = useState(false)
  return (
    <div >
        <div className='asked-questions'>
            <div className="question1 asked">
                <div className='question'>
                    <h3>{title}</h3>
                    <i className='icon' onClick={()=>setIsShown(!isShown)}>
                        {isShown? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </i>
                </div>
                <p className={isShown? 'answer show' : 'answer'}>{info}</p>
            </div>
        </div>
    </div>
  )
}
export default Questions;