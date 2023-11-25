import React, { useState } from 'react'
import { TipPercent } from './TipPercent';

export const Tips = ({setTipAmount, tipAmount}) => {

  const tips = [5,10,15,25,50];

    function handleCustomTip(e){
    setTipAmount({...tipAmount, tip:Number(e.target.value)})
  }
 

  return (
    <div className='flex flex-col gap-4'>
        <label htmlFor="" className='text-[#5E7A7D] font-bold'>Select Tip %</label>
        <div className='grid grid-cols-2 sm:grid-cols-3 grid-rows-2 gap-6'>
            {tips.map(tip => (
              <TipPercent key={tip} value={tip} setTipAmount={setTipAmount} tipAmount={tipAmount}/>
            ))}
            <input onChange={handleCustomTip} value={tipAmount.tip} type="number" id="custom-tip" placeholder='Custom' className='text-2xl text-[#00474B] text-right font-bold outline-none placeholder:text-[#9EBBBD] placeholder:font-bold placeholder:text-center bg-[#F3F9FA] h-12 rounded border-2 border-transparent hover:border-[#26C2AE] focus:border-[#26C2AE]' />
        </div>
    </div>
  )
}
