import React from 'react'
import { useRef } from 'react';

const Manager = () => {
    const ref=useRef();
    const refa=useRef();

    const showpassword = () => {
        // console.log(ref.current.src)
        // ref.current.src = "/view.png";
        if(ref.current.src.includes("/view.png")){
            ref.current.src="/hide.png";
            refa.current.type="text";
        }
        else{
            ref.current.src="/view.png";
            refa.current.type="password";
        }
    }
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
            <div className=" w-4/5 mx-auto my-2 flex text-center content-center flex-col">
                <div className='font-bold text-4xl'>
                    <span className='text-green-600'>&lt;</span>
                    Key
                    <span className='text-green-800'>Heaven</span>
                    <span className='text-green-600'>/&gt;</span>
                </div>
                <h1 className='font-bold text-lg text-green-900'>Your own Password Manager</h1>
                <div className='flex flex-col p-2 gap-4'>
                    <input placeholder="Enter Website Name" type="url" className='border border-black  rounded-full w-full p-4 py-[3px]' />
                    <div className='flex gap-4'>
                        <input placeholder="Enter Username" type="text" className='border p-4 border-black w-full rounded-2xl py-[3px]' />
                        <div className="relative">
                            <input ref={refa} placeholder="Enter Password" type="password" className='border border-black w-full rounded-2xl  p-4 py-[3px]'/>
                            <span className="absolute right-1 top-2 cursor-pointer " onClick={showpassword}>
                                <img ref={ref} src="/hide.png" alt="none" className='h-[20px]' /></span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                <button className='gap-1 border border-black p-2 rounded-full bg-green-500 w-fit flex justify-center items-center hover:bg-green-600 font-bold'>
                <lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover">
                </lord-icon> 
                Add Password
                </button>
                </div>
            </div>
        </>
    )
}

export default Manager
