import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show,setShow] = useState(false);
  return <>
  <button className="btn" onClick={()=>{setShow(!show)}}>Show/hide</button>
  {show && <Item />}
  </>
};

const Item = ()=>{
  const [size,setSize] = useState(window.innerWidth);
  const checkSize = ()=>{
    setSize(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize', checkSize);

    return ()=>{
      window.removeEventListener('resize',checkSize);
    }
  },[])
  //Here initial render wont save us as the component is toggled
  //(<Item/> comes in the picture and goes out) hence getting back <Item/> is an inital render
  //Because we are not causing a rerender of item from a state variable
  // so when it is toggled back on
  //it is similar to an initial render and hence we will have multiple event listeners , hence 
  //we need a cleanup function
  return<>
    <h1>Window size:</h1>
    <h3>Size: {size} px</h3>
  </>;
}

export default ShowHide;
