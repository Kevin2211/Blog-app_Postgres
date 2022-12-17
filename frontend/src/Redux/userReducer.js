import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    userInfo: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        token: ''
    }
}


export const accountSlice = createSlice({
    name: "user", 
    initialState, 
    reducers: {
        signin: (state,action) => {

            state.userInfo = action.payload

        },
        signout: (state, action) => {
            state.userInfo = null

        }
    }
})

export const {signin, signout} = accountSlice.actions

export default accountSlice.reducer