import React, { Fragment, useEffect, useState } from 'react'

export default function FunctionalCom() {

  var [count, setCount] = useState(0);

  const increment = () => {
    setCount(++count);
  }

  const mouseOverFunc = (e) => {
    console.log(e.clientX);
    console.log(e.clientY);
  }

  useEffect(() => {
    document.addEventListener("mouseover", mouseOverFunc)

    return () => {
      document.removeEventListener("mouseover", mouseOverFunc)
    }
  }, [count])

  return (
    <Fragment>
      <div>  
        <h3>see console to understand componentWillUnmount using useEffect</h3> 
        <div>count = {count}</div>
        <button onClick={increment}>Increament</button>
      </div>

    </Fragment>
  )
}

