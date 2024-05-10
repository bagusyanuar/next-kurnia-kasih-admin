import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'
import type { PayloadEntity } from '@/lib/redux'
import initialState, { TEntity } from './state'
import event from './event'

const slice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        Reset: () => initialState,
        SetEntity: (state, action: PayloadAction<PayloadEntity>) => {
            switch (action.payload.key) {
                case "ID":
                    state.Entity.ID = action.payload.value as string
                    break;
                case "Name":
                    state.Entity.Name = action.payload.value as string
                    break;
                case "Thumbnail":
                    state.Entity.Thumbnail = action.payload.value as string | null
                    break;
                case "IsMainProduct":
                    state.Entity.IsMainProduct = action.payload.value as boolean
                    break;
                default:
                    break;
            }
        },
        SetMassEntity: (state, action: PayloadAction<TEntity>) => {
            state.Entity = action.payload
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
    SetMassEntity,
    SetConfirmation
} = slice.actions

export const CategoryState = (state: RootState) => state.category
export default slice.reducer