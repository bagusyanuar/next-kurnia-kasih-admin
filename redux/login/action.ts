import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios';
import { APIResponse, ErrorParser } from '@/lib/util'
import { ThunkConfig } from '@/lib/redux'
import { LoginRequest } from '@/model/auth'

export const submit = createAsyncThunk<APIResponse, void, ThunkConfig>('login/submit', async (_, { rejectWithValue, getState }) => {
    try {
        const state = getState()
        const body: LoginRequest = {
            Email: state.login.Email,
            Password: state.login.Password,
        }
        const response = await axios.post('/api/auth', body);
        return response.data
    } catch (error: any | AxiosError) {
        return rejectWithValue(ErrorParser(error))
    }
})