import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'
import type { PayloadEntity } from '@/lib/redux'
import initialState from './state'
import event from './event'

const slice = createSlice({
    name: 'motorbikeCategory',
    initialState,
    reducers: {
        Reset: () => initialState,
        SetEntity: (state, action: PayloadAction<PayloadEntity>) => {
            if (action.payload.key === "Name") {
                state.Entity.Name = action.payload.value as string
            }
            
            if (action.payload.key === "ID") {
                state.Entity.ID = action.payload.value as string
            }
        },
        SetConfirmation: (state, action: PayloadAction<boolean>) => {
            state.OnConfirmation = action.payload
        }
    },
    extraReducers: event
})

export const {
    Reset,
    SetEntity,
    SetConfirmation
} = slice.actions

export const MotorbikeCategoriesState = (state: RootState) => state.motorbikeCategory
export default slice.reducer