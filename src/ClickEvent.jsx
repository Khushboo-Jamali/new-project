import React from 'react'

export default function ClickEvent() {
    let firstName = "Ali";
    function sayHello(){
        firstName = 'Aliza';
        alert(firstName)
    }
  return (
    <>
    <h3>{firstName} 🤔</h3>
    <button onClick={sayHello}>Click me </button>
    {/* <button onClick={()=>alert('hello world')}>Click me </button> */}

    </>

)
}
