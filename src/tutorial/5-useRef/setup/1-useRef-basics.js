import React, { useEffect, useRef } from 'react';

// preserves value just as useEffect
// DOES NOT trigger re-render
// target DOM nodes/elements


//Used for uncontrolled inputs

const UseRefBasics = () => {
  
  const refContainer = useRef(null);
  const ref2Container = useRef(null);
  const submitHandler = (e)=>{
    e.preventDefault();
    //refContainer.current returns  <input type="text"/>
    console.log(ref2Container.current)
    console.log(refContainer.current.value);
  }

  useEffect(()=>{
    refContainer.current.focus();
  })
  
  return <>
    <form className="form" onSubmit={(e)=>{submitHandler(e)}}>
      {/** Now refContainer.current targets the input node */}
      <input type="text" ref={refContainer}/>
      <button type="submit">Submit</button>
    </form>
    <div className="container" ref={ref2Container}></div>
  </>;
};

export default UseRefBasics;
