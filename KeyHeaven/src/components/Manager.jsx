import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

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
        if (ref.current.src.includes("/view.png")) {
            ref.current.src = "/hide.png";
            refa.current.type = "text";
        }
        else {
            ref.current.src = "/view.png";
            refa.current.type = "password";
        }
    }

    const savepassowrd = (e) => {
        
        e.preventDefault();
        if (!form.site || !form.username || !form.password) {
            alert("All fields are required!");
            return;
        }
        toast.success('Password Saved successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "light"
        });
        console.log(form);
        setPasswordarray([...Passwordarray, { ...form, id: uuidv4() }]);
        localStorage.setItem("passwords", JSON.stringify([...Passwordarray, { ...form, id: uuidv4() }]));
        setform({ site: "", username: "", password: "" });
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyele = (e) => {
        toast.success('Copied to Clipboard!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "light"

        });
        navigator.clipboard.writeText(e);
    }

    const deletel = (id) => {
        // console.log("deleting id", id);
        let c=confirm("Are you sure you want to delete this password?");
        if(c){
            setPasswordarray([...Passwordarray.filter((item) => item.id !== id)]);
            localStorage.setItem("passwords", JSON.stringify([...Passwordarray.filter((item) => item.id !== id)]));
            toast.success('Password Deleted successfully', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "light"
            });
        }
    }

    const editl = (id) => {
        setform(Passwordarray.filter((item) => item.id === id)[0]);
        setPasswordarray([...Passwordarray.filter((item) => item.id !== id)]);
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={false}
                draggable={false}
                theme="light"
            />
            <div className=" w-9/10 mx-auto my-2 flex text-center content-center flex-col">
                <div className='font-bold text-4xl'>
                    <span className='text-green-600'>&lt;</span>
                    Key
                    <span className='text-green-800'>Heaven</span>
                    <span className='text-green-600'>/&gt;</span>
                </div>
                <h1 className='font-bold text-lg text-green-900'>Your own Password Manager</h1>
                <div className='flex flex-col p-2 gap-4 '>
                    <input value={form.site} onChange={handleChange} name="site" placeholder="Enter Website Name" type="url" className=' border border-black  rounded-full w-full p-4 py-[3px]' />
                    <div className='flex flex flex-col md:flex-row w-full  gap-4'>
                        <input value={form.username} onChange={handleChange} name="username" placeholder="Enter Username" type="text" className='border p-4 border-black w-full rounded-2xl py-[3px]' />
                        <div className="relative">
                            <input ref={refa} value={form.password} onChange={handleChange} name="password" placeholder="Enter Password" type="password" className='border p-5 border-black w-full rounded-2xl py-[4px]' />
                            <span className="absolute right-[10px] top-2 cursor-pointer " onClick={showpassword}>
                                <img ref={ref} src="/hide.png" alt="none" className='h-[20px]' /></span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button onClick={savepassowrd} className=' border border-black p-2 rounded-full bg-green-500 w-fit flex justify-center items-center hover:bg-green-600 font-bold'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                            className="h-5">
                        </lord-icon>Save
                    </button>
                </div>
                <div className="passwordtable">
                    <h2 className='p-2 text-2xl mt-5 font-serif font-bold'>Your saved Passwords</h2>
                    {Passwordarray.length === 0 && <h1 className='text-2xl text-center text-green-800'>No Passwords Saved</h1>}
                    {Passwordarray.length != 0 &&
                        <table className="table-auto border-collapse border w-full border-white">
                            <thead className='bg-green-700 text-white border-white'>
                                <tr>
                                    <th className='py-2 border-white'>Website URl</th>
                                    <th className='py-2 border-white'>Username</th>
                                    <th className='py-2 border-white'>Password</th>
                                    <th className='py-2 border-white'>Action</th>
                                </tr>
                            </thead>
                            {Passwordarray.map((item) => {
                                return <tbody key={item.id} className='bg-green-100 shadow-2xl'>
                                    <tr>
                                        <td className='py-2 border-white '><a href={item.site}>{item.site}</a></td>
                                        <td className="py-2 border-white whitespace-nowrap">
                                            <div className="flex items-center  justify-center gap-2">
                                                {item.username}
                                                <button className="cursor-pointer" onClick={() => { copyele(item.username) }}>
                                                    <img src="/copy.gif" alt="Copy" className="h-6" />
                                                </button>
                                            </div>
                                        </td>
                                        <td className="py-2 border-white whitespace-nowrap">
                                            <div className="flex justify-center items-center gap-2">
                                                {item.password}
                                                <button className="cursor-pointer" onClick={() => { copyele(item.password) }}>
                                                    <img src="/copy.gif" alt="Copy" className="h-6" />
                                                </button>
                                            </div>
                                        </td>

                                        <td className=''><button className="cursor-pointer" onClick={() => { editl(item.id) }}><img src="/edit.gif" alt="" className='h-6' /></button><button className="cursor-pointer" onClick={() => { deletel(item.id) }}><img src="/trash-bin.gif" alt="" className='h-6' /></button></td>
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
