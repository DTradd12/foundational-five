import {configureStore} from "@reduxjs/toolkit";
import workoutHistoryReducer from "../slices/workoutHistorySlice";

export const store = configureStore({
    reducer: {
        whs: workoutHistoryReducer
    },
});
