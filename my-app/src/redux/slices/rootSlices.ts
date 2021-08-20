import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Violin',
        price: "2000.00",
        description: "Makes violin sounds",
        Dimensions: '155 x 212 x 27mm',
        weight: 'Approx 400g',
        cost_of_prod: 2000.00,
        series: 'Bethoven Series'
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        choosePrice: (state, action) => { state.price = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice, } = rootSlice.actions;