"use client"
import { Button, Spin } from 'antd';
import Title from 'antd/es/typography/Title';
import { memo, useEffect, useState } from 'react';

interface VerifySectionProps {
  user: any; // string yoki object bo‘lishi mumkin
}

const VerifySection = ({ user }: VerifySectionProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const sendData = typeof user === "string" ? { user } : user;

    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData), // ✅ har doim JSON formatda yuboriladi
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("error");
        }
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
            onClick={() => window.location.reload()} // qayta urinib ko‘rish uchun
          >
            Try Again
          </Button>
        </div>
      )}
    </div>
  );
};

export default memo(VerifySection);
