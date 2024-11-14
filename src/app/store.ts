import {configureStore} from "@reduxjs/toolkit";
import {serialsReducer} from "../containers/Counter/CounterSlice.ts";

export const store = configureStore({
    reducer: {
        cart: serialsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

