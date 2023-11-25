import React from 'react'

export const TotalBill = ({tipAmount}) => {

  function calculate(){
    return ((tipAmount.bill / tipAmount.guests) * tipAmount.tip / 100) + (tipAmount.bill / tipAmount.guests);
  }
  
  let result = calculate().toFixed();

  if (!(result > 0) || result == Infinity){
    result = "0.00"
  }

  return (
    <div className='flex'>
        <div>
            <h3 className='text-white font-bold'>Total</h3>
            <span className='text-sm text-[#7F9D9F] font-bold'>/ person</span>
        </div>

        <span className='font-bold sm:text-5xl text-3xl text-[#26C2AE] ml-auto'>${result}</span>

    </div>
  )
}
