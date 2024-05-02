import axios, { AxiosError, AxiosResponse } from "axios"
import { APIResponse, ErrorParser } from "@/lib/util"
import { List } from './dummy'

export async function GET(request: Request) {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        const response: APIResponse = {
            code: 200,
            data: List,
            message: 'successfully show motorbike categories',
            meta: {
                page: 1,
                per_page: 10,
                total_page: 1,
                total_rows: List.length
            }
        }
        return Response.json(response, {status: response.code})
    } catch (error: any | AxiosError) {
        const response: APIResponse = ErrorParser(error)
        return Response.json(response, { status: response.code })
    }
}