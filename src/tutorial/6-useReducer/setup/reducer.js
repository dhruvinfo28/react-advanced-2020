export // reducer function
const reducer = (state,action)=>{
  //Note it is always mandatory to return a state from the reducer function otherwise it will throw an error
  if(action.type==='ADD_ITEM'){
      const newPeople = [...state.people, action.payload]
      return {
        ...state,
        people: newPeople,
        isModal: true,
        modalValue: 'Item added'
      }
  }

  if(action.type==='NO_VALUE'){
    return {
      ...state,
      isModal:true,
      modalValue: 'Please type some name to add'
    }
  }

  if(action.type==='DELETE_ALL'){
      return {
        ...state,
        people: [],
        isModal: true,
        modalValue: 'All names deleted'
      }
  }

  if(action.type==='CLOSE_MODAL'){
    return {
      ...state,
      isModal: false,
    }
  }
  
  if(action.type==='REMOVE_NAME'){
    const newPeople = state.people.filter(person=> person.id!=action.payload);
    return {
      ...state,
      people: newPeople
    }
  }
  //Default 
  throw new Error('No matching type found, set your action type correctly')
}