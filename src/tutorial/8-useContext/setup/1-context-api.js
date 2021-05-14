import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)


//Using context api we dont have to pass the props down the component tree they are made available

const PersonContext = React.createContext();
//Now you want to wrap your root component with this
//Returns a provider and a consumer
//Wrap root with the provider

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{removePerson, people}}>
      {/**<PersonContext.Provider value={removePerson} > 
       * Above shows passing down one prop
       * to pass many use PersonContext.Provider value={{prop1,prop2,prop3}}
       * And then destructure it as
       * const {prop1,prop2,prop3} = useContext(PersonContext);
       */}
      <h3>prop drilling</h3>
      {/** now that we have context we dont need to pass down the props every level, just give them in the root
       * Context comes in handy when there is a depth of certain level
       */}
      {/* <List people={people} removePerson={removePerson} /> */}
      <List  />
    </PersonContext.Provider>
  );
};

const List = () => {
  const {people} = useContext(PersonContext);
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            // removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  //And use the prop like this
  const {removePerson} = useContext(PersonContext);
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
