import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

import Navbar from './home /navbar'
import Content from './home /content'

export default function Seller(){
    const cookies = new Cookies();
    const Navigate = useNavigate()
    useEffect(()=>{
        cookies.get('jwt') === undefined && Navigate('/seller/login')

    },[Navigate,cookies])
    console.log(cookies.get('jwt'))
    return (
        <div>
            <Navbar/>
            <Content/>
        </div>
    )
}