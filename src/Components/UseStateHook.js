import React, { Fragment, useEffect, useState } from 'react'
import UseMemoHook from './UseMemoHook';

const Hooks = () => {

    
    const [name, setName] = useState("");
    const [a, setA] = useState(0);

    /* using componentDidUpdate method using useEffect by adding dependency */
    useEffect(()=>{
        console.log("name = " + name);
    },[name])

    const onChange = (event)=>{
        setName(event.target.value);
    }

    const increment =() => {
        setA(a+1)
        console.log(a);
    }
    const decrement =() => {
        setA(a-1);
        console.log(a);
    }
  return (
    <Fragment>
   <input type="text" placeholder='Enter Your Name...' value={name} onChange={(e)=>{setName(e.target.value)}}/>
   <input type="text" placeholder='Enter Your Name...' value={name} onChange={onChange}/>

   <p>a = {a}</p>
   <button onClick={increment}>increment</button>
   <button onClick={decrement}>decrement</button>

   <UseMemoHook/>
    </Fragment>
  )
}

export default Hooks