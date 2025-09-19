"use client";
import { Button, Spin } from "antd";
import Title from "antd/es/typography/Title";
import { memo, useEffect, useState } from "react";

type UserType = {
  email: string;
  password: string;
};

const VerifySection = ({ user }: { user: UserType }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    fetch("https://api.errorchi.uz/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // ✅ API kutayotgan format
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("error");
        return res.json();
      })
      .then((data) => {
        console.log("✅ Login success:", data);
        window.location.href = "/profile";
      })
      .catch(() => {
        setError("Try again later");
        setLoading(false);
      });
  }, [user]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white">
      {loading && !error && (
        <div className="flex flex-col items-center gap-4">
          <Spin size="large" />
          <Title level={2} className="!m-0 text-gray-700">
            Verifying your account...
          </Title>
          <p>Please wait a moment</p>
        </div>
      )}

      {!loading && error && (
        <div className="flex flex-col items-center gap-4">
          <Title level={2} className="!m-0 text-red-500">
            Verification Failed
          </Title>
          <p>{error}</p>
          <Button
            type="primary"
            danger
            onClick={() => open("https://lesson-8-3-loyiha.vercel.app/login")}
          >
            Try Again
          </Button>
        </div>
      )}
    </div>
  );
};

export default memo(VerifySection);
