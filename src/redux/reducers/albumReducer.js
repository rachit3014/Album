import axios from "axios";

const {createSlice, createAsyncThunk} =require("@reduxjs/toolkit");
// inital state of albums
const initialState={albums:[]}

// fetching data from api
export const getinitalState=createAsyncThunk("album/getinitalState",()=>{
    return axios.get("https://jsonplaceholder.typicode.com/albums")
})



const albumSlice=createSlice({
    name:"album",
    initialState:initialState,
    reducers:{


    },extraReducers:(builder)=>{
        builder.addCase(getinitalState.fulfilled,(state,action)=>{

            const albumarray=[];

            for (let i=0;i< action.payload.data.length;i+=10)
            {
                let emptyarray=[]
                    emptyarray=action.payload.data.slice(i,[i+11]);
                    albumarray.push(emptyarray)
            }
            state.albums=[...albumarray]
        })



    }


 

})
export const albumReducer= albumSlice.reducer;
//  action for albumSlice
export const actions=albumSlice.actions;
// selector for album
export const albumSelector=(state)=> state.albumReducer.albums     