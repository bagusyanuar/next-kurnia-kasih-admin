import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios';
import { APIResponse, ErrorParser } from '@/lib/util'
import { ThunkConfig } from '@/lib/redux'

export const FindAll = createAsyncThunk<APIResponse, void, ThunkConfig>('motorbikeCategory/FindAll', async (_, { rejectWithValue, getState }) => {
    try {
        const state = getState()
        const response = await axios.get('/api/motorbike-category');
        return response.data
    } catch (error: any | AxiosError) {
        return rejectWithValue(ErrorParser(error))
    }
})