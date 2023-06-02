import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface StepState {
    steps: number;
    goal: number
}

const initialState:StepState = {
    steps: 2000,
    goal: 10000
}

export const stepSlice = createSlice({
    name: "steps",
    initialState,
    reducers: {
        updateSteps: (state, action:PayloadAction<StepState>) => {
            state.steps = action.payload.steps,
            state.goal = action.payload.goal
        }
    }
})

export const { updateSteps } = stepSlice.actions;
export default stepSlice.reducer