import { NextResponse, NextRequest } from "next/server";

export const GET = () => {
    const data = [
        {id: 1, name: "Bekzod"}
    ]
    return NextResponse.json(data)
}