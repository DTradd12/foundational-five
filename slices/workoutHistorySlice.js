import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    pastDeadliftWorkouts: []
}

const workoutHistorySlice = createSlice({
    name:'whs',
    initialState,
    reducers:{
        setDeadliftWorkout(state, action) {
            state.pastDeadliftWorkouts.push(action.payload);
        }
    }
});

export const { setDeadliftWorkout } = workoutHistorySlice.actions;

//Selectors
export const selectPastDeadlistWorkouts = (state) => state.whs.pastDeadliftWorkouts;

export default workoutHistorySlice.reducer;
