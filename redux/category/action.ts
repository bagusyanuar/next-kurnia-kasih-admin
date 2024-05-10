import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios';
import { APIResponse } from '@/lib/util'
import { ErrorParser } from '@/lib/axios'
import { ThunkConfig } from '@/lib/redux'

const InternalAPIURL: string = '/api/category'

export const FindAll = createAsyncThunk<APIResponse, void, ThunkConfig>('category/FindAll', async (_, { rejectWithValue, getState }) => {
    try {
        const state = getState()
        const response = await axios.get(InternalAPIURL);
        return response.data
    } catch (error: any | AxiosError) {
        return rejectWithValue(ErrorParser(error))
    }
})

export const Create = createAsyncThunk<APIResponse, { thumbnail: File | null }, ThunkConfig>('category/Create', async ({ thumbnail }, { rejectWithValue, getState }) => {
    try {
        const state = getState()
        const entity = state.motorbikeCategory.Entity
        let form = new FormData()
        form.append('name', entity.Name)
        if (thumbnail !== null) {
            form.append('thumbnail', thumbnail)
        }
        const response = await axios.post(InternalAPIURL, form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data
    } catch (error: any | AxiosError) {
        return rejectWithValue(ErrorParser(error))
    }
})

export const Update = createAsyncThunk<APIResponse, { thumbnail: File | null }, ThunkConfig>('category/Update', async ({ thumbnail }, { rejectWithValue, getState }) => {
    try {
        const state = getState()
        const entity = state.motorbikeCategory.Entity
        const id = entity.ID
        const url = `${InternalAPIURL}/${id}`
        let form = new FormData()
        form.append('name', entity.Name)
        if (thumbnail !== null) {
            form.append('thumbnail', thumbnail)
        }
        const response = await axios.put(url, form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data
    } catch (error: any | AxiosError) {
        return rejectWithValue(ErrorParser(error))
    }
})


export const Delete = createAsyncThunk<APIResponse, void, ThunkConfig>('category/Delete', async (_, { rejectWithValue, getState }) => {
    try {
        const state = getState()
        const entity = state.motorbikeCategory.Entity
        const id = entity.ID
        const url = `${InternalAPIURL}/${id}`
        const response = await axios.delete(url);
        return response.data
    } catch (error: any | AxiosError) {
        return rejectWithValue(ErrorParser(error))
    }
})

