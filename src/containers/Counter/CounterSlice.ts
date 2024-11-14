import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axiosApi from "../../axoisApi.ts";

interface Task {
    id: number;
    title: string;
    description: string;
}

interface CounterState {
    value: Task[];
    info: null | string;
    isLoading: boolean;
    error: boolean;
}

const initialState: CounterState = {
    value: [],
    info: null,
    isLoading: false,
    error: false,
}

export const serialsInfo = createAsyncThunk(
    'serials/serialsInfo',
    async (query) => {
        const response = await axiosApi.get(`${query}`);
        return response.data;
    }
);

export const fetchSerialsInfos = createAsyncThunk(
    'serials/fetchSerialsInfos',
    async (query) => {
        const response = await axiosApi.get(`${query}`);
        return response.data;
    }
);
export const serialsSlice = createSlice({
    name: 'serials',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(serialsInfo.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(serialsInfo.fulfilled, (state, action: PayloadAction<Task[]>) => {
                state.value = action.payload;
                state.isLoading = false;
            })
            .addCase(serialsInfo.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(fetchSerialsInfos.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchSerialsInfos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.info = action.payload;
            })
            .addCase(fetchSerialsInfos.rejected, (state) => {
                state.isLoading = false;
            })
    }
});

export const serialsReducer = serialsSlice.reducer;




