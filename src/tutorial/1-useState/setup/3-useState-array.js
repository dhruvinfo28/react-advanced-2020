import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  let [arr,setArr] = useState(data);
  
  const removeElement = (id)=>{
    //Filter returns a new arr with items not having id equal to the one to be deleted
      setArr(arr.filter(item=> item.id != id));
  }
  return (
    <>
    {arr.map(item=>{
      return <div key={item.id} className="item">
          <h4>{item.name}</h4>
          <button onClick={()=>{removeElement(item.id)}}>Remove</button>
      </div>
    })}
    <button className='btn' onClick={()=>{setArr([])}}>Clear array</button>
    </>
  );
};

export default UseStateArray;
