import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';



//If a folder has an index.js file , then default export will be from that file if we only import the folder in
//main file (In our case app.js)

//Reducer function
import {reducer} from './reducer'

const defaultState = {
  people: [],
  isModal: false,
  modalValue:'Hello World'
}

const Index = () => {
  const [name,setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);
  //WE will only change the state now using the dispatch function that would be handled by the reducer function

  const submitHandler = (e)=>{
    e.preventDefault();
    if(name){
      const newPerson = {id: new Date().getTime().toString, name};
      //payload is the default naming convention can use anything 
      dispatch({type:'ADD_ITEM',payload:newPerson});

      //Removing modal
      // setTimeout(()=>{
      //   dispatch({type:'CLOSE_MODAL'});
      // },2000);

      //Removing modal from the modal component, as we want to close the modal after every element 
      //So pass the function as a prop


    }else{
      dispatch({type:'NO_VALUE'})
    }

    setName('')
  }

  const closeModal = ()=>{
    dispatch({type:'CLOSE_MODAL'});
  }

  const deleteItem = (id)=>{
    console.log(id)
    dispatch({type:'REMOVE_NAME', payload: id})
  }

  return <>
    {state.isModal && <Modal closeModal={closeModal} modalValue={state.modalValue}/>}
    <form className="form" onSubmit={submitHandler}>
      <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      </div>
      <button type="submit">Add</button>
    </form>
    <div className="container">
      {
        state.people.map(person=>{
          return <div key={person.id} className="item">
           <h4>
              {person.name}
             </h4>
             <button  onClick={()=>deleteItem(person.id)}>Remove item</button>
          </div>
        })
      }
    </div>

  </>;
};

export default Index;
