import React, { useState, useEffect } from 'react'


export default function Dropdown(props) {
    const [isOpen, setOpen] = useState(false)
    const [flag, setFlag] = useState()

    const handleClick = () => {
        setOpen(!isOpen)
    }

    const handleButton = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        setFlag(() => {
            return {
                [name]: value
            }
        })
        setOpen(false)
    }
    useEffect(() => {
        props.setValue( flag && flag.btn)

    }, [flag])

    return (
        <div className="w-full bg-[#ffff]">
            <button onClick={handleClick} className='border w-full p-2 flex justify-start rounded-lg border-[#8E8E8E] text-[#8E8E8E] flex justify-between'>{flag ? flag.btn : "Category"}<svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            {isOpen &&
                <div className='border p-2 z-10 rounded-b-xl'>
                    <ul className="flex flex-col gap-1 text-sm ">
                        <li>
                            <button className="flex font-dmsans text-sm p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 w-full " value='Electronic' onClick={handleButton} name="btn">Electronic</button>

                        </li>
                        <li>
                            <button className="flex font-dmsans text-sm p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 w-full" onClick={handleButton} value='Fashion' name="btn">Fashion</button>
                        </li>
                        <li>
                            <button className="flex font-dmsans text-sm p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 w-full" onClick={handleButton} value='Photography' name="btn">Photography</button>
                        </li>
                    </ul>
                </div>
            }

        </div>
    )
}
