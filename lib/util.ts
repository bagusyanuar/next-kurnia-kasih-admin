import axios, { AxiosError } from 'axios'

export type APIResponse = {
    code: number
    message: string
    data?: any
    meta?: any
}

export const ErrorParser = (error: any | AxiosError): APIResponse => {
    if (axios.isAxiosError(error) && error.response) {
        return {
            code: error.response.data.code,
            message: error.response.data.message,
            data: error.response.data.data,
            meta: error.response.data.meta
        }
    }
    return {
        code: 500,
        message: 'internal server error',
        data: null,
        meta: null
    }
}