import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size,setSize] = useState(window.innerWidth);
  
  const updateSize = ()=>{
    setSize(window.innerWidth);
  }

  // useEffect(()=>{
  //   window.addEventListener('resize',updateSize);
  // },[])
  //We only want to add the event listener once . If we dont do that on every window change setSize 
  //called component rerenders and we add a new event listener 
  
  //Or we can return a cleanup function 
  useEffect(()=>{
    console.log('use Effect')
    window.addEventListener('resize',updateSize);
    return ()=>{
      //This function will run before useEffect(if useEffect has run once)
      console.log('cleanup')
      window.removeEventListener('resize',updateSize);
    }
  })
  //render coming two times because of strict mode
  console.log('render')
  return <>
  <h1>Window Size</h1>
  <h2>{size}PX</h2>
  </>;
};

export default UseEffectCleanup;
