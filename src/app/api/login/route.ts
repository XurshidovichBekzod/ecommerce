// app/api/auth/login/route.ts
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const user = await req.json();

    // Backend API ga forward qilish
    const response = await fetch("https://api.errorchi.uz/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const data = await response.json();

    // Cookie qo‘yish (tokenni saqlash)
    const res = NextResponse.json({
      success: true,
      data: data.data, // token va user ma'lumotlari ham qaytariladi
    });

    res.cookies.set("token", data.data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 kun
    });

    return res;
  } catch (error) {
    return NextResponse.json(
      { error: "Server error", details: (error as Error).message },
      { status: 500 }
    );
  }
};
