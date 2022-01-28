const INCREMENT ='INCREMENT' // Define a constant for increment action types
const DECREMENT = 'DECREMENT' // Define a constant for decrement action types

const counterReducer = (state = 0, action) =>{
  switch(action.type){
    case INCREMENT: return state+=1
    case DECREMENT: return state-+1
    default:state

  }
};
const inc=()=> { return {type: INCREMENT}}
const dec=()=>{ return {type: DECREMENT}}
const store = Redux.createStore(
    counterReducer
    
  );
