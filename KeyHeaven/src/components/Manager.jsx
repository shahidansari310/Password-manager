import React from 'react'

const Manager = () => {
    return (
        <>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
            <div className=" w-4/5 mx-auto my-2 ">
                <div className='font-bold text-4xl'>
                    <span className='text-green-600'>&lt;</span>
                    Key
                    <span className='text-green-800'>Heaven</span>
                    <span className='text-green-600'>/&gt;</span>
                </div>
                <h1 className='font-bold text-lg text-green-900'>Your own Password Manager</h1>
                <div className='flex flex-col p-2 gap-4'>
                    <input type="text" className='border border-black  rounded-full w-full p-4 py-0' />
                    <div className='flex gap-2'>
                        <input type="text" className='border border-black w-full rounded-2xl' />
                        <input type="text" className='border border-black w-full rounded-2xl' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manager
