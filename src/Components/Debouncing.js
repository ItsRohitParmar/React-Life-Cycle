import React, { useEffect, useState } from 'react'

const Debouncing = () => {
    const [nameValue, setNameValue] = useState("");
    const [name, setName] = useState("");


    useEffect(() => {
        
        const timeOut = setTimeout(()=>{
            setName(nameValue)
        }, 2000)

      return () => {
        clearTimeout(timeOut)
      }
    }, [nameValue])
    
  return (
    <div>
        <h3>{name}</h3>

        <input type="text" value={nameValue} onChange={(e)=>{setNameValue(e.target.value)}}/>
    </div>
  )
}

export default Debouncing