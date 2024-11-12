import { createSlice } from "@reduxjs/toolkit";

export const loginSlice= createSlice({
    name: 'login',
    initialState:{
        accesstoken: null,
    },
    reducers:{
        saveToken : (state,action) =>{
            state.accesstoken = action.payload
        },
        removeToken:(state) => {
            state.accesstoken = null
        }
    }

})

export const {saveToken,removeToken} = loginSlice.actions
export default loginSlice.reducer