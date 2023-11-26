import React, { useState } from 'react'
import person from '../assets/icon-person.svg'

export const Guests = ({tipAmount, setTipAmount}) => {



    function handleGuests(e){
        setTipAmount({...tipAmount,guests: Number(e.target.value)});
    }

    const inputStyle = 'w-full text-2xl text-[#00474B] border-2 text-right font-bold outline-none placeholder:text-[#9EBBBD] placeholder:font-bold bg-[#F3F9FA] h-12 rounded px-4';

    return (

        <div className='flex flex-col gap-2 relative'>
            <label htmlFor="guests" className='font-bold text-[#5E7A7D]'>Number of Guests</label>
            <div className='w-full relative'>
                <input value={tipAmount.guests} onChange={handleGuests} type="number" id="guests" placeholder='0' className={`${inputStyle} ${tipAmount.guests === 0 ? "border-[#E17457]" : "hover:border-[#26C2AE] focus:border-[#26C2AE] border-transparent"}`} />
                <img src={person} alt="person icon" className='absolute top-4 pl-4' /> 
            </div>

            {tipAmount.guests === 0 ? (<p className='absolute right-0 top-0 text-[#E17457] font-bold'>Can't be zero!</p>) : null}  

        </div>
    )
}
