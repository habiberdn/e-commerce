import React from 'react';
import Navbar from './home/navbar'
import Content from './home/content'


export default function Default() {
  return(<div className='overflow-x-hidden relative'>
    <Navbar/>
    <Content/>
    
  </div>
  );
}