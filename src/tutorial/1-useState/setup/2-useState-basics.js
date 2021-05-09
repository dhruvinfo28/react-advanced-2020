import React, { useState } from 'react';

//Here you can see useState is a named export
//useState is a function , that helps us change the state of any javascript variable and the rerender the component
//On invoking sets the default value for a variable

const UseStateBasics = () => {
  //It returns a default value for the variable and a function to control that variable as an array 
  //of two elements one the var(Js object) and other the function
  //The parameter is the default value of title variable
  //Note that setTitle is just a naming convention , you can name it anything 

  let [title,setTitle] = useState('Random Title');
  const clickHandler = ()=>{
    //Notice doing this won't change the title, as we donot render the component 
    //And then on restarting we will still see Random Title as we were not able to preserve the
    //State of title variable
    // title = 'Hello World';

    //This would do it
    // setTitle('Hello world');

    //Toggling 
    if(title==='Random Title'){
      setTitle(69)
    }else{
      setTitle('Random Title');
    }
  }
  return (
    <>
      <h1>{title}</h1>
      <button className='btn' onClick={clickHandler}> Change title</button>
    </>
  );
};

export default UseStateBasics;

//Few points to remember:(Important )
//Hooks can only be invoked inside components

//Components using hooks have to be upper case, we can have lower cased components but we need to import them with a name that has first letter Capital

//Hooks always start with a use

//Cannot call a hook conditionally(Note not talking about the function that the hook returns )