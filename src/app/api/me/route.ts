// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password } = body;

  if (email === "test@gmail.com" && password === "123456") {
    return NextResponse.json({
      data: {
        accessToken: "fake_token_123",
        user: {
          email,
          role: "user",
        },
      },
    });
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
