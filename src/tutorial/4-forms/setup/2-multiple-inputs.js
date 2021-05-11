import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person,setPerson] = useState({firstName:'', email:''});
  const [people, setPeople] = useState([]);
  
  const handleChange = (e)=>{
      const val = e.target.name;
      const x = e.target.value;
      setPerson((prevState)=>{
        return {...prevState, [val]: x};
        //Same as firstName: e.target.value
      })
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    if(person.firstName && person.email){
        setPeople((people)=>{
          return [...people,{id:new Date().toString(),firstName: person.firstName, email: person.email}]
        })
        setPerson({firstName:'',email:''})
    }
  }

  return (
    <>
      <article>
        <form className='form' onSubmit={submitHandler}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
