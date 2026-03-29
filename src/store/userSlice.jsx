import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data:[],
}
const userslice = createSlice({
    name:"user", //name of the slice 
    initialState,
    reducers:{
        loaduser: (state,action) => {
            state.data = action.payload;
            
        } //Sync Actions
    }, // iske andar action banyage 
})
export const {loaduser} = userslice.actions
export default userslice.reducer;