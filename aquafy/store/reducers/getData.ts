import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IData } from "../../types/fetchData";

const baseUrl = 'https://mucro.serveo.net'

export const fetchData = createAsyncThunk('dataFetch', async () => {
    try {
        const response = await axios.get<IData>(baseUrl + '/getdata')
        return response.data
    } catch(err) {
        console.log(err)
    }
})

interface IInitialState {
    data: null | IData;
    status: string;
}

const initialState: IInitialState = {
    data: null,
    status: 'loading'
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchData.pending.type]: (state) => {
            state.status = 'loading'
            state.data = null
        }, 
        [fetchData.fulfilled.type]: (state, action: PayloadAction<IData>) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [fetchData.rejected.type]: (state) => {
            state.status = 'error'
            state.data = null
        }, 
    }

})

export default dataSlice.reducer