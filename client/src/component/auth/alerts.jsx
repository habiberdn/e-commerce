import React,{useState} from "react"

export default function Alert(props){
  const hideAlert = () => {
    const el = document.querySelector('.alert');
    if (el) el.parentElement.removeChild(el);
  };

  // const showAlert = (type, msg,time = 6) => {
  //   hideAlert();
  //   const markup = `<div class="alert alert--${type}">${msg}</div>`;
  //   document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
  //   window.setTimeout(hideAlert, time * 1000);
  // };
  console.log(props.type)
  console.log(props.value)


  return <div className={'alert alert--'+ props.type}>{props.value}</div>
}