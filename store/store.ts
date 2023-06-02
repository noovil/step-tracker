import {configureStore} from '@reduxjs/toolkit';
import weatherReducer from "../features/weatherSlice";
import stepReducer from "../features/stepSlice";

export const store = configureStore({
    reducer: {
        weatherData: weatherReducer,
        steps: stepReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch