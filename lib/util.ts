import axios, { AxiosError } from 'axios'

export type APIResponse = {
    code: number
    message: string
    data?: any
    meta?: any
}

