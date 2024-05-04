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

export const Create = createAsyncThunk<APIResponse, { thumbnail: File | null }, ThunkConfig>('motorbikeCategory/Create', async ({ thumbnail }, { rejectWithValue, getState }) => {
    try {
        const state = getState()
        const entity = state.motorbikeCategory.Entity
        let form = new FormData()
        form.append('name', entity.Name)
        if (thumbnail !== null) {
            form.append('thumbnail', thumbnail)
        }
        const response = await axios.post('/api/motorbike-category', form,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data
    } catch (error: any | AxiosError) {
        return rejectWithValue(ErrorParser(error))
    }
})

export const Delete = createAsyncThunk<APIResponse, void, ThunkConfig>('motorbikeCategory/Delete', async (_, { rejectWithValue, getState }) => {
    try {
        const state = getState()
        const entity = state.motorbikeCategory.Entity
        const id = entity.ID
        const response = await axios.delete(`/api/motorbike-category/${id}`);
        return response.data
    } catch (error: any | AxiosError) {
        return rejectWithValue(ErrorParser(error))
    }
})

