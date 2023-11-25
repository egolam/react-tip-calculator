import React, { useState } from 'react'
import dollar from '../assets/icon-dollar.svg';

export const Bill = ({setTipAmount, tipAmount}) => {


    function handleBill(e){
        setTipAmount({...tipAmount,bill: Number(e.target.value)});
    }

    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor="bill" className='font-bold text-[#5E7A7D]'>Bill</label>
            <div className='w-full relative'>
                <input value={tipAmount.bill} onChange={handleBill} type="number" id="bill" placeholder='0' className='w-full text-2xl border-2 border-transparent text-[#00474B] text-right font-bold outline-none placeholder:text-[#9EBBBD] placeholder:font-bold bg-[#F3F9FA] h-12 rounded px-4 hover:border-[#26C2AE] focus:border-[#26C2AE]' />
                <img src={dollar} alt="dollar icon" className='absolute top-4 pl-4'/>
            </div>
        </div>
    )
}
