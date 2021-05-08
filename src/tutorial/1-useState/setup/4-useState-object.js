import React, { useState } from 'react';


const UseStateObject = () => {
  let [person,setPerson] = useState({name:'Dhruvee', age:21, title: 'ABC'})
  const changeTitle = ()=>{
    //Passing the same person using the spread operator(techincally spreading its properties and then)
    //Overwriting the title property
    setPerson({...person,title: 'New title'})

    //Note: You can have any number of state variables 
  }
  return (
    <>
    <h2>{person.name}</h2>
    <h2>{person.age}</h2>
    <h3>{person.title}</h3>
    <button className="btn" onClick={changeTitle}> Change title</button>
    </>
  );
};

export default UseStateObject;
