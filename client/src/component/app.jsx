import React from 'react';
import Navbar from './home/navbar'
import Content from './home/content'
import Footer from './home/footer'

export default function Default() {
  return(<div className='overflow-x-hidden relative'>
    <Navbar/>
    <Content/>
    <Footer/>
  </div>
  );
}