import React,{useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

import Navbar from './home/navbar'
import Content from './home/content'

export default function Seller(){
    const cookies = new Cookies();
    const Navigate = useNavigate()
    
    console.log(cookies.get('jwt'))
    console.log(cookies.getAll())
    useEffect(()=>{
        console.log(cookies.get('jwt'))
        cookies.get('jwt') === undefined && Navigate('/seller/login')
    },[Navigate,cookies])
    return (
        <div>
            <Navbar/>
            <Content/>
        </div>
    )
}
