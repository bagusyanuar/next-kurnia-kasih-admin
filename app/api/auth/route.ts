import { APIResponse, ErrorParser } from "@/lib/util"
import { LoginRequest } from "@/model/auth"
import axios, { AxiosError, AxiosResponse } from "axios"
import { getIronSession, SessionData } from 'iron-session'
import { sessionOptions, User } from '@/lib/session'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
    try {
        const req: LoginRequest = await request.json() as LoginRequest
        const body = {
            'email': req.Email,
            'password': req.Password
        }
        await new Promise((resolve) => setTimeout(resolve, 1500))
        if (req.Email === 'admin@gmail.com' && req.Password === 'admin') {
            let userSession: User = {
                email: 'admin@gmail.com',
                username: 'admin'
            }
            const session = await getIronSession<SessionData>(cookies(), sessionOptions)
            session.user = userSession
            await session.save()
            const response: APIResponse = {
                code: 200,
                message: 'successfully login'
            }
            return Response.json(response, {status: response.code})
        } else {
            const response: APIResponse = {
                code: 401,
                message: 'email and password did not match'
            }
            return Response.json(response, {status: response.code})
        }
    } catch (error: any | AxiosError) {
        const response: APIResponse = ErrorParser(error)
        return Response.json(response, {status: response.code})
    }
}