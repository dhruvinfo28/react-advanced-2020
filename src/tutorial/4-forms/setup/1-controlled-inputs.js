import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people,setPeople] = useState([]);

  const clickHandler = (e) => {
    e.preventDefault();
    if(firstName && email){
      const id = new Date().toString();
      setPeople((people)=>{
        return [...people, {id,firstName, email}];
      })
    }else{
        //Set a state variable error and prompt the user to write both 
    }
  }

  return <>
    <article>
      <form className='form' onSubmit={clickHandler}>
        <div className="form-control">
          <label htmlFor="firstName">Name: </label>
          <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="email">email: </label>

          {/** Bind the state value to the value of the input,
           * changing the state onChange is necessary as ,if we dont user wont be able to type
           * cause value wont change as it is referenced to an immutable state value that only changes by its setState function
           */}
          <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <button type="submit">Add user</button>
      </form>
    </article>
    <article>
        {
          people.map((person)=>{
            return <div key={person.id} className='item'>
              <p>{person.firstName}</p>
              <p>{person.email}</p>
            </div>
          })
        }
    </article>
  </>;
};

export default ControlledInputs;
