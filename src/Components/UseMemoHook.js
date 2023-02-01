import React, { useMemo, useState, memo, useEffect } from 'react'

const UseMemoHook = () => {

    const [show, setShow] = useState(false)

    const id = useMemo(()=>{
     return Math.floor(Math.random()*500);
    }, [])

    const handleShow = ()=>{
      setShow((prev)=> !prev );
    }

    useEffect(() => {
     console.log("UseMemoHook Component re-rendering...") 
    })
    
  return (
    <div>
        <h3>{id}</h3>
        <button onClick={handleShow}>{show?"Hide":"Show"}</button>
        <p>{show?"some key value":"*******"}</p>
    </div>
  )
}

export default memo(UseMemoHook)

//Child component of useStateHook Component