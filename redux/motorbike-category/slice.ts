import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'
import initialState from './state'
import event from './event'

const slice = createSlice({
    name: 'motorbikeCategory',
    initialState,
    reducers: {
        Reset: () => initialState
    },
    extraReducers: event
})

export const {
    Reset,
} = slice.actions

export const MotorbikeCategoriesState = (state: RootState) => state.motorbikeCategory
export default slice.reducer