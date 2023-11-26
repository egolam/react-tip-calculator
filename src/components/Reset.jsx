import React from 'react'

export const Reset = ({tipAmount, setTipAmount}) => {



  const {bill, tip, guests} = tipAmount;

  function handleReset(){
    setTipAmount({bill:"", tip:"", guests:""});
  }

  const resetBtnStyleDisabled = 'mt-auto bg-[#0D686D] text-[#00474B] font-bold text-xl py-2 rounded';
  const resetBtnStyleEnabled = 'mt-auto bg-[#26C2AE] text-[#00474B] font-bold text-xl py-2 rounded';
  return (
    <button onClick={handleReset} disabled={!bill && !tip && !guests} className={`${!bill && !tip && !guests ? resetBtnStyleDisabled : resetBtnStyleEnabled}`}>RESET</button>
  )
}
