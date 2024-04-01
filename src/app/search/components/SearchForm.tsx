'use client'

import { useState } from "react";
import DatePicker from "./DatePicker";
import { Checkbox } from "@/components/ui/checkbox";

export default function SearchForm() {
 
  const [originCity, setOriginCity] = useState<string>('')
  const [destinyCity, setDestinyCity] = useState<string>('')
  const [wantCheckOut, setWantCheckOut] = useState<boolean>(true)
  const [checkInDate, setCheckInDate] = useState<Date>()
  const [checkOutDate, setCheckOutDate] = useState<Date>()
  const todayDate = new Date()
  const tomorrowDate = new Date(todayDate)
  tomorrowDate.setDate(todayDate.getDate() + 1)

  return (
    <section className="gap-10 flex flex-col items-center">
      <form
        action=""
        className="h-max flex flex-col items-center md:items-baseline gap-1 md:gap-4"
      >
        <span className="text-black font-medium text-lg">
          Enter your city
        </span>
        <input
          type="text"
          onChange={(e) => setOriginCity(e.target.value)}
          className="border-b-2 border-slate-300/60 outline-none p-1"
        />
        <DatePicker dateName="Check-in" date={checkInDate} setDate={setCheckInDate}/>

        <span className="text-black font-medium text-lg mt-4">
          Enter your destiny
        </span>
        <input
          type="text"
          onChange={(e) => setDestinyCity(e.target.value)}
          className="border-b-2 border-slate-300/60 outline-none p-1"
        />
        <div className="flex gap-1 italic my-2">
          <Checkbox id='willCheckOut' checked={wantCheckOut} onCheckedChange={()=>setWantCheckOut((previousCheckOutOption => !previousCheckOutOption))}/>
          <label htmlFor="willCheckOut" className="text-sm select-none">I want buy my return trip</label>
        </div>
        {wantCheckOut && <DatePicker dateName="Check-out" date={checkOutDate} setDate={setCheckOutDate}/> }

      </form>

      <article className="text-center flex justify-between gap-2 min-w-[250px] w-max bg-blue-600 p-2 rounded-md text-white">
        Flight from
        <p className="min-w-6 min-h-6 italic font-semibold">
          {originCity ? originCity : "City 1"}
        </p>
        to
        <p className="min-w-6 min-h-6 italic font-semibold">
          {destinyCity ? destinyCity : "City 2"}
        </p>
      </article>

      <article className="text-center flex justify-between min-w-[200px] w-max min-h-[4rem] bg-blue-900 rounded-md overflow-hidden text-white">
        <p className="flex flex-1 flex-col items-center bg-green-600 min-h-full p-2 font-medium">
          Departure
          <span className="text-xl font-bold">
            {checkInDate ? checkInDate.toLocaleDateString() : todayDate.toLocaleDateString()}
          </span>
        </p>
        {wantCheckOut && <p className="flex flex-1 flex-col items-center bg-red-500 min-h-full p-2 font-medium">
          Return
          <span className="text-xl font-bold">
            {checkOutDate ? checkOutDate.toLocaleDateString() : tomorrowDate.toLocaleDateString()}
          </span>
        </p>}
      </article>
  
    </section>
  );
}