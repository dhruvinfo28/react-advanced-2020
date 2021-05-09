import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  let [arr,setArr] = useState(data);
  
  const removeElement = (id)=>{
    //Filter returns a new arr with items not having id equal to the one to be deleted
      // setArr(arr.filter(item=> item.id != id));
      //The function method of doing
      //Whatever the callback inside the setArr returns will be the new value
      //SInce curly braces are not used in the callback meaning it returns wahtever filter returns
      //Your app will crash if the callback doesn't return a value
      setArr((prevArr)=>prevArr.filter(item=> item.id != id));
  }
  
  //Whenver you wish to add an item never do prev.something = some or use push 
  //Always treat the state variable as immutable and use the setState() method only with spread
  //Operator to pass in the new Value of the variable
  // const addItem = ()=>{
  //   setArr((prevArr)=>{
  //       return [...prevArr, {id:6, name: "Dhruvee"}];
  //   })
  // }
  return (
    <>
    {arr.map(item=>{
      return <div className="item">
          <h4>{item.name}</h4>
          <button onClick={()=>{removeElement(item.id)}}>Remove</button>
      </div>
    })}
    <button className='btn' onClick={()=>{setArr([])}}>Clear array</button>
    {/* <button className='btn' onClick={addItem}>Add Item</button> */}
    </>
  );
};

export default UseStateArray;
