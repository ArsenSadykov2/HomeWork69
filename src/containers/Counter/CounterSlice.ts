import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axoisApi.ts";

interface Task {
    id: number;
    title: string;
    description: string;
}

interface CounterState {
    value: Task[];
    info: null;
    isLoading: boolean;
    error: boolean;
}

const initialState: CounterState = {
    value: [],
    info: null,
    isLoading: false,
    error: false,
}

export const searchShows = createAsyncThunk(
    'serials/searchShows',
    async (query) => {
        const response = await axiosApi.get(`${query}`);
        return response.data;
    }
);

export const searchShows = createAsyncThunk(
    'serials/searchShows',
    async (query) => {
        const response = await axiosApi.get(`${query}`);
        return response.data;
    }
);

