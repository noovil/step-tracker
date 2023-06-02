import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface WeatherDataState {
    loading: boolean;
    error: null | string;
    data: null | any;
}

const initialState:WeatherDataState = {
    loading: false,
    error: null,
    data: null
}

export const fetchWeatherData = createAsyncThunk('getWeatherData', async (data, thunkApi) => {
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=3.11765515&lon=101.67737410331793&appid=480656b51ec06756e79def81f077c25b`);
        const data = await res.json();
        console.log(data)
        return data;
    } catch (error:any) {
        return thunkApi.rejectWithValue(error.message)
    }
  });

export const weatherSlice = createSlice({
    name: "weatherData",
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(fetchWeatherData.pending, (state, action)=>{
            state.loading = true;
        })
        .addCase(fetchWeatherData.fulfilled, (state, action:PayloadAction<any>)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchWeatherData.rejected, (state, action:PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default weatherSlice.reducer