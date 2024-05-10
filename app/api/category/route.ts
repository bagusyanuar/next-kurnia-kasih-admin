import { NextRequest, NextResponse } from "next/server"
import axios, { AxiosError } from "axios"
import { APIResponse } from "@/lib/util"
import { ErrorParser } from "@/lib/axios"
import { List } from './dummy'

export async function GET(request: NextRequest) {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        const response: APIResponse = {
            code: 200,
            data: List,
            message: 'successfully show categories',
            meta: {
                page: 1,
                per_page: 10,
                total_page: 1,
                total_rows: List.length
            }
        }
        return NextResponse.json(response, { status: response.code })
    } catch (error: any | AxiosError) {
        const response: APIResponse = ErrorParser(error)
        return NextResponse.json(response, { status: response.code })
    }
}

export async function POST(request: NextRequest) {
    try {
        const form = await request.formData()
        await new Promise((resolve) => setTimeout(resolve, 1500))
        const response: APIResponse = {
            code: 200,
            message: 'successfully create category',
        }
        return NextResponse.json(response, { status: response.code })
    } catch (error: any | AxiosError) {
        const response: APIResponse = ErrorParser(error)
        return NextResponse.json(response, { status: response.code })
    }
}