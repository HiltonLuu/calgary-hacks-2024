"use client"
import { DatePickerWithRange } from '@/components/ui/datepicker'
import React, { useEffect, useState } from 'react'
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import NumericStepper from '@/components/ui/numberstepper';



function daycareInfoCard() {

    const [count, setCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [disableButton, setDisableButton] = useState(false);
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
        from: new Date(),
        to: addDays(new Date(), 2),
    });


    const currentoccupancy = 3;
    const rateOfCharge = 25;

    useEffect(() => {
        console.log(dateRange);
        handlePriceUpdate()
    }, [dateRange, count])


    // function handlePriceUpdate() {
    //     const startDate = dateRange?.from?.getDate() ?? 0;
    //     const endDate = dateRange?.to?.getDate() ?? 0;
    //     let calcRange = endDate - startDate;
    //     let totalPrice = rateOfCharge * (calcRange + 1) * count;

    //     setTotalPrice(totalPrice);
    // }

    function handlePriceUpdate() {
        const startDate = dateRange?.from ?? new Date();
        const endDate = dateRange?.to ?? addDays(new Date(), 2);

        // calc the number of days in the date range including partial days
        const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
        const calcRange = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

        const totalPrice = rateOfCharge * (calcRange + 1) * count;

        setTotalPrice(totalPrice);
    }



    let max = 6 - currentoccupancy

    return (
        <>
            <div className='sticky flex justify-end pt-12 top-32 w-full'>
                <div className='flex justify-center w-full  absolute '>
                    <div className='flex w-fit h-fit bg-white rounded-2xl shadow-xl border border-gray-200'>

                        {/* Inner Text Information */}
                        <div className='flex flex-col space-y-5 m-8 w-full'>
                            <div className='flex flex-col justify-start align-bottom gap-x-2 gap-y-1'>
                                {/* Rate of charge */}
                                <div className='flex flex-row justify-between w-full'>
                                    <div className='flex flex-row'>
                                        <h1 className='text-black text-2xl font-medium'>$25</h1>
                                        <h1 className='text-black text-lg self-end'>/day</h1>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 self-center">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg> */}
                                    </div>
                                    <div className='flex flex-row'>
                                        <h1 className='text-gray-400 text-md self-end'>3/6 spots left</h1>
                                    </div>
                                </div>

                                <div className='flex justify-center flex-col w-full'>
                                    <h1 className='text-gray-800 text-sm pb-1'>Hours of operation: 7:00am-6:00pm</h1>
                                </div>
                            </div>

                            {/* Date range picker */}
                            <div className='flex justify-center flex-col w-full'>
                                <h1 className='text-gray-300 text-sm pb-1'>Date</h1>
                                <DatePickerWithRange date={dateRange} setDate={setDateRange} />
                            </div>

                            {/* Numeric Stepper */}
                            <div className='flex justify-center flex-col w-full'>
                                <h1 className='text-gray-300 text-sm pb-2'>Number of Children</h1>
                                <NumericStepper value={count} setValue={setCount} min={1} max={max} />
                            </div>

                            <button className={`flex justify-center rounded-lg w-full p-2 text-white text-lg border-gray-50 ${disableButton ? "bg-gray-100 border" : "bg-yellow-400"}`}
                                disabled={disableButton}
                                onClick={() => (
                                    setDisableButton(true)
                                )}
                            >
                                Book
                            </button>

                            {/* Total Charge */}
                            <div className='flex flex-row justify-between w-full'>
                                <div className='flex flex-row'>
                                    <h1 className='text-black text-lg'>Total</h1>
                                </div>
                                <div className='flex flex-row'>
                                    <h1 className='text-black text-lg'>${totalPrice}</h1>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default daycareInfoCard