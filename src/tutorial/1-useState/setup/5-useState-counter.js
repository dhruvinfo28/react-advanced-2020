import React, { useState } from 'react';

const UseStateCounter = () => {
  let [value,setValue] = useState(0);
  return <>
  <section style={{margin:"4rem"}}>
    <h1>
      Counter
    </h1>
    <h2>{value}</h2>
    <button className="btn" onClick={()=>{setValue(value+1)}}>Increase</button>
  </section>
  </>;
};

export default UseStateCounter;
