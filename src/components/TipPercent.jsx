import React from 'react'

export const TipPercent = ({value, setTipAmount, tipAmount}) => {
  


    const btnStyle = 'h-12 bg-[#00474B] rounded flex items-center justify-center font-bold text-2xl cursor-pointer';

  function handleTip(e){
    setTipAmount({...tipAmount,tip: Number(e.target.dataset.tip)});
  }

  return (
    <span onClick={handleTip} className={`${btnStyle} ${value == tipAmount.tip ? "bg-[#26C2AE] text-[#00474B]": "bg-[#00474B] text-white"}`} data-tip={value}>{value}%</span>
  )
}
