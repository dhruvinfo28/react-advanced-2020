import React, { useState, useEffect } from 'react';
//Whenever you think os some work outside the component think useEffect

// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value,setValue] = useState(0);
  //Notice how every time we call setValue it renrenders the component and useEffect is run

  // useEffect(()=>{
  //   console.log('Use state called')
  //   //This is a work outside component ( Even console log is a side effect)
  //   document.title = `New message${value}`
  // });

  //Currently it shows message0 from the very start as useEffect runs when the component was 
  //rendered the first time 

  //A leyman would think of calling useEffect inside an if statement when value is greater than
  //0, but remember we cant call hooks conditionally (general rules)
  //This is wrong

  // if(value>0){
  //   useEffect(()=>{

  //   })
  // }

  //The correct way to overcome this challenge is 
  // useEffect(()=>{
  //   if(value>0){
  //     document.title = `New messages (${value})`
  //   }
  // })

  //The second paramter
  //First is the callback and second is the array of dependencies
  useEffect(()=>{
      if(value>0){
        document.title = `New messages ${value}`
      }
  },[value])
  // If the list is empty the useEffect function will only run on the initial render
  //Note that how value is the dependency for our useState as we only want to rerun it
  //When value changes , hence we pass it as a dependency

  //Remember if you don't pass anything as the second parameter it will run everytime
  //If you pass second parameter as an empty array it only runs on initial render
  //And if you pass an array with a dependency it will run everytime something about that dependency changes
  return <>
    <h1>{value}</h1>
    <button className='btn' onClick={()=>{setValue(value+1)}}>Click me to get a message</button>
  </>;

  //We can have as many useEffects as we want to 
};

export default UseEffectBasics;

//The callback inside useEffect is called the effect and React remembers to run the effect after it
//updates the dom i.e renders the components


//The documentation describes useEffect as something that we would use to cause a sideEffect from 
//within a functional component