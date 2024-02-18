import React from 'react'

function daycareInfoCard() {
    return (
        <>
            <div className='sticky flex justify-end pt-12 top-20 w-full'>
                <div className='flex justify-center w-full  absolute '>
                    <div className='flex w-[75%] h-[500px] bg-white rounded-2xl shadow-xl border border-gray-200'>

                        {/* Inner Text Information */}
                        <div className='m-8'>
                            <div className='flex justify-start align-bottom gap-x-2'>
                                <div className='flex flex-row'>
                                    <h1 className='text-black text-2xl font-medium'>$10</h1>
                                    <h1 className='text-black text-lg self-end'>/hour</h1>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 self-center">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default daycareInfoCard