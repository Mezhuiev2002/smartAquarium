import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = 'https://mucro.serveo.net'

export const fetchFood = createAsyncThunk('dataFeed', async (params: any) => {
    try {
        console.log(params)
        const response = await axios.post(baseUrl + '/setfood', params)
        return response.data
    } catch(err) {
        console.log(err)
    }
})

interface IInitialState {
    feedTime: null | string;
    status: string;
}

const initialState: IInitialState = {
    feedTime: null,
    status: 'loading'
}

const foodSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchFood.pending.type]: (state) => {
            state.status = 'loading'
        }, 
        [fetchFood.fulfilled.type]: (state, action: PayloadAction<string>) => {
            state.status = action.payload
        },
        [fetchFood.rejected.type]: (state) => {
            state.status = 'error'
        }, 
    }

})

export default foodSlice.reducer