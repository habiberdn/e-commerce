import React from 'react';
import Navbar from './home/navbar'
import Content from './home/home'


export default function Default() {
  return(<div className='overflow-x-hidden'>
    <Navbar/>
    <Content/>
    
  </div>
  );
}