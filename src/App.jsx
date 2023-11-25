import { Bill } from "./components/Bill"
import { Guests } from "./components/Guests"
import { Reset } from "./components/Reset"
import { Tips } from "./components/Tips"
import { TipAmount } from "./components/TipAmount"
import { TotalBill } from "./components/TotalBill"
import { useState } from "react"

function App() {

  const [tipAmount, setTipAmount] = useState({
    bill:"",
    tip: "",
    guests: ""
  })

  return (
    <>
      <main className="w-full h-screen bg-[#C5E4E7] flex items-center justify-center">
        <div className="bg-white rounded-3xl drop-shadow-xl p-8 flex flex-col sm:flex-row sm:gap-11 sm:w-[57.5rem] sm:h-[30rem] w-[375px] h-full">
          <section className="sm:w-1/2 sm:py-4 sm:pl-4 flex flex-col gap-10 justify-center">
            <Bill tipAmount={tipAmount} setTipAmount={setTipAmount}/>
            <Tips tipAmount={tipAmount} setTipAmount={setTipAmount}/>
            <Guests tipAmount={tipAmount} setTipAmount={setTipAmount}/>
          </section>
          <section className="sm:w-1/2 bg-[#00474B] rounded-2xl sm:p-10 p-6 flex flex-col gap-10 mt-8">
            <TipAmount tipAmount={tipAmount}/>
            <TotalBill tipAmount={tipAmount}/>
            <Reset setTipAmount={setTipAmount} tipAmount={tipAmount}/>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
