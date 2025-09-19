"use client";
import { memo, useEffect, useState } from "react";

const VerifySection = ({ user }: { user: string }) => {
  const [error, setError] = useState<null | string>(null);
  
  useEffect(() => {
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: user,
    })
      .then((res)=> {
        if(!res.ok){
            throw new Error("error")
        }
        window.location.href = "/profile";
      })
      .catch(() => {
        setError("Try again");
      });
  }, []);

  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="text-center">
        <h2 className="text-4xl">Varify...</h2>
        {error && (
          <div>
            <button
              onClick={() => open("https://dashbord-5ekh.vercel.app/login")}
              className="text-red-500"
            >
              {error}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(VerifySection);
