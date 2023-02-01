import React, { useContext } from 'react'
import Context from '../index'; 

const UseContextHook = () => {
    const data = useContext(Context)
  return (
    <div>
        <h5>{data.name}</h5>
        <h5>{data.lastName}</h5>
    </div>
  )
}

export default UseContextHook