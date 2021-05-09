import React, { useState } from 'react';

const UseStateCounter = () => {
  let [value,setValue] = useState(0);
  const complexIncrease = ()=>{
    setTimeout(()=>{
      //This setValue is an asynchronous function, hence it sees the value as whatever the previous 
      //Value was , so if we click this button like 10 times in 1 sec the counter would only increase
      //by one as in all the calls value was seen as one
        // setValue(value+1);

        //To overcome
        setValue((prevState)=>{
          return prevState+1;
        })
    },1000)
  }
  return <>
  <section style={{margin:"4rem"}}>
    <h1>
      Counter
    </h1>
    <h2>{value}</h2>
    <button className="btn" onClick={()=>{setValue(value+1)}}>Increase</button>
  </section>
  <section styel={{margin:"4rem"}}>
    <h1>Complex counter</h1>
    <h2>{value}</h2>
    <button className="btn" onClick={complexIncrease}>Complex Counter</button>
  </section>
  </>;
};

export default UseStateCounter;
