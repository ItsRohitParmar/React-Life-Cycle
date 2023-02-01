import React, { useMemo, useState, memo, useEffect, useCallback } from 'react'

const UseCallBackHook = () => {

    const [show, setShow] = useState(false)
    const[b, setB] = useState(0);

    const id = useMemo(()=>{
     return Math.floor(Math.random()*500);
    }, [])

    const handleShow = ()=>{
      setShow((prev)=> !prev );
    }

    const sumFunc = useCallback((id, b)=>{
      console.log("callback called...");
      return id+b;
    }, [id,b])
    
    let sum = useMemo(()=>{
      console.log("useMemo called...");
      return sumFunc(id, b);
    }, [id, b])

    useEffect(() => {
     console.log("UseCallBackHook Component re-rendering...sum = "+ sum) 
    })
    
  return (
    <div>
        <h3>id = {id}</h3>
        <h3>b = {b}</h3> <button onClick={()=>{setB(b+1)}}> Increament</button>
         <button onClick={()=>{setB(b-1)}}> Decreament</button>
        <h1>sum = {sum}</h1>


        <button onClick={handleShow}>{show?"Hide":"Show"}</button>
        <p>{show?"some key value":"*******"}</p>

    </div>
  )
}

export default memo(UseCallBackHook)

//Child component of useStateHook Component