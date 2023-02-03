import { NextApiResponse } from "next"
import { CookieSerializeOptions, serialize } from 'cookie'
import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

export const setCookie = (
    res: NextApiResponse,
    name: string,
    value: string | undefined,
    options: CookieSerializeOptions = {}
) => {


    if (typeof options.maxAge === 'number') {
        options.expires = new Date(Date.now() + options.maxAge * 1000)
    }


    if (value && value == process.env.PASSWORD) {
        res.setHeader('Set-Cookie', serialize(name, value?.toString() || "", options))
        res.status(200)

    } else {
        res.setHeader('Set-Cookie', serialize(name, "", options))
        res.status(500)
    }

}


