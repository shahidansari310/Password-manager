import React from 'react'
import { useRef, useState, useEffect } from 'react';

const Manager = () => {
    const ref = useRef();
    const refa = useRef();
    const [form, setform] = useState({ site: "", username: "", password: "" });
    const [Passwordarray, setPasswordarray] = useState([])


    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordarray(JSON.parse(passwords));
        }
    }, [])

    const showpassword = () => {
        // console.log(ref.current.src)
        // ref.current.src = "/view.png";
        if (ref.current.src.includes("/view.png")) {
            ref.current.src = "/hide.png";
            refa.current.type = "text";
        }
        else {
            ref.current.src = "/view.png";
            refa.current.type = "password";
        }
    }

    const savepassowrd = (e) =>{
        e.preventDefault(); 
        if (!form.site || !form.username || !form.password) {
            alert("All fields are required!");
            return;
        }
        console.log(form);
        setPasswordarray([...Passwordarray, form]);
        localStorage.setItem("passwords", JSON.stringify([...Passwordarray, form]));
        setform({ site: "", username: "", password: "" });
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
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
                    <input value={form.site} onChange={handleChange} name="site" placeholder="Enter Website Name" type="url" className=' border border-black  rounded-full w-full p-4 py-[3px]' />
                    <div className='flex gap-4'>
                        <input value={form.username} onChange={handleChange} name="username" placeholder="Enter Username" type="text" className='border p-4 border-black w-full rounded-2xl py-[3px]' />
                        <div className="relative">
                            <input ref={refa} value={form.password} onChange={handleChange} name="password" placeholder="Enter Password" type="password" className='border border-black w-full rounded-2xl  p-4 py-[3px]' />
                            <span className="absolute right-1 top-2 cursor-pointer " onClick={showpassword}>
                                <img ref={ref} src="/hide.png" alt="none" className='h-[20px]' /></span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button onClick={savepassowrd} className='gap-1 border border-black p-2 rounded-full bg-green-500 w-fit flex justify-center items-center hover:bg-green-600 font-bold'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password
                    </button>
                </div>
                <div className="passwordtable">
                    <h2 className='p-2 text-2xl mt-5 font-serif font-bold'>Your saved Passwords</h2>
                    {Passwordarray.length === 0 && <h1 className='text-2xl text-center text-green-800'>No Passwords Saved</h1>}
                    {Passwordarray.length !=0 &&
                    <table className="table-auto border-collapse border w-full">
                        <thead className='bg-green-700 text-white'>
                            <tr>
                                <th className='py-2'>Website URl</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                            </tr>
                        </thead>
                        {Passwordarray.map((item)=>{
                            return <tbody className='bg-green-100'>
                            <tr>
                                <td className='py-2 '><a href="item.site">{item.site}</a></td>
                                <td className='py-2'>{item.username}</td>
                                <td className='py-2'>{item.password}</td>
                            </tr>
                        </tbody>
                        })}
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
