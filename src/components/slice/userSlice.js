import {createSlice} from "@reduxjs/toolkit"
const userSlice=createSlice({
    name:"user",
    initialState:null,
       

    reducers:{
        addUser:(state,action)=>{
          return {...state,...action.payload}
           

        },
        removeUser:(state,action)=>{
        return null
        },

        updatedUser:(state,action)=>{
          return {...state,...action.payload}
        },

    }
})
export const {addUser,removeUser,updatedUser}=userSlice.actions
export default userSlice