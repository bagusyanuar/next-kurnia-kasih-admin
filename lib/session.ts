import { SessionOptions } from 'iron-session'

export const sessionOptions: SessionOptions = {
    password: process.env.SESSION_SECRET as string,
    cookieName: 'user',
    cookieOptions: {
        maxAge: 60 * parseInt(process.env.SESSION_MAX_AGE as string),
        sameSite: "strict",
        path: "/"
    }
}

export type User = {
    email: string
    username: string
}

declare module 'iron-session' {
    interface SessionData {
        token?: string,
        user?: User,
        cookieUser?: string
    }
}