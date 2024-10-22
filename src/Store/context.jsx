import { createContext, useReducer } from "react";


export const AppStore = createContext();

// Reducer function to handle actions
const reducer = (state, action) => {
 
     if(action.type==="Btn-toggle-home"){
      return {
        ...state,
        Home: true, 
        Post: false, 
      };
     }
     else if(action.type==="Btn-toggle-Post"){
           return{
  ...state,
  Home: false, 
  Post: true, 
}
     }
    else if(action.type==="AddArray"){
      return {
        ...state,
        Arr:[...state.Arr,action.payload.Data]
      }
    }
    else if(action.type==="DeleteArray"){
      return{
        ...state,
        Arr:state.Arr.filter((item)=> item.IdRef!=action.payload.Id)
      }
    }
   
  return {...state}
};

const AppData = ({ children }) => {
  // Function to handle the home 
  const HandleHome = () => {
    const Value={
      type: "Btn-toggle-home",
    }
    dispatch(Value);
  };
  const HandlePost = () => {
    const Value={
      type: "Btn-toggle-Post",
    }
    dispatch(Value);
  };
  // Function to add value in arr
const HandleSubmit=(IdRef,PostTitleRef,PostContentRef,ReactionRef,Hashtag)=>{

const Data={
  IdRef:IdRef,
  PostTitleRef:PostTitleRef,
  PostContentRef:PostContentRef,ReactionRef:ReactionRef,Hashtag:Hashtag
}
console.log(Data)
const Value={
  type:"AddArray",
  payload:{
Data
  }
}
dispatch(Value);
}
// function to delete
const HandleDelete=(IdRef)=>{

  const Value={
    type:"DeleteArray",
    payload:{
Id:IdRef
    }
  }
  dispatch(Value);
  }

  // useReducer to manage the state with initial values
  const [State, dispatch] = useReducer(reducer, {
    Home: true, 
    Post:false,
    Arr: [], 
  });
  console.log(State.Arr)

  return (
    <AppStore.Provider value={{ Home:State.Home, HandleHome,HandleSubmit,users:State.Arr,HandleDelete,HandlePost}}>
      {children}
    </AppStore.Provider>
  );
};

export default AppData;
