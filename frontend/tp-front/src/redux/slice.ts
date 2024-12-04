import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Params } from "react-router-dom";

export interface GroupState{
    users: [];
   
}

const groupInitialState : GroupState ={
    users:[],
  
}

const slice = createSlice({
    name:'counter',
    initialState: groupInitialState,
    reducers: {
        // increment: (state) => {
        //     state.value++;
        // },
        // decrement: (state) => {
        //     state.value--;
        // },
        // incrementByAmount: (state, action:PayloadAction<number>) => {
        //     state.value+=action.payload;
        // },  
         
        register: (state:any, action:PayloadAction<{}>) => {
            console.log(action.payload);
            console.log(state.users);
           // state.users=action.payload;
           // console.log(state.users);
            return{
                ...state, //spreading the original state
                 users: [ ...state.users,action.payload],   
            }

        }, 
        
    }
})

export const {actions,reducer} = slice