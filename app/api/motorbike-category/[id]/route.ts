import axios, { AxiosError, AxiosResponse } from "axios"
import { APIResponse, ErrorParser } from "@/lib/util"

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        const response: APIResponse = {
            code: 200,
            data: params.id,
            message: 'successfully show motorbike category',
            meta: null
        }
        return Response.json(response, { status: 200 })
    } catch (error: any | AxiosError) {
        const response: APIResponse = ErrorParser(error)
        return Response.json(response, { status: response.code })
    }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        const response: APIResponse = {
            code: 200,
            data: params.id,
            message: 'successfully delete motorbike category',
            meta: null
        }
        return Response.json(response, { status: 200 })
    } catch (error: any | AxiosError) {
        const response: APIResponse = ErrorParser(error)
        return Response.json(response, { status: response.code })
    }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        const response: APIResponse = {
            code: 200,
            data: params.id,
            message: 'successfully update motorbike category',
            meta: null
        }
        return Response.json(response, { status: 200 })
    } catch (error: any | AxiosError) {
        const response: APIResponse = ErrorParser(error)
        return Response.json(response, { status: response.code })
    }
}