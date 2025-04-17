// import { log } from 'console';
import React, { useState } from 'react'

export default function StateInFunctionalComponent() {
    // let name ='Ali';
    //  const [name , setName]=useState('Ali');
    const [name , setName]=useState(0);

     function updateName(){

        // setName('Ali Khan ')
        setName(name+1)

     }
    // let name ='Ali Khan';
    
    // function updateName(){
    //     name ='Aliza Khan'
    //     alert(name)
    // }
    console.log('rendering');
  return (
    <> 
    <h2>{name}</h2>
    <button onClick={updateName}>Click me</button>
    </>
  )
}
