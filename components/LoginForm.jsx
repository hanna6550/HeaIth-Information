"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        phone,
        password,
        redirect: false,  // Prevents automatic redirect
      });

      if (res?.error) {
        setError("Invalid Credentials");
      } else {
        router.replace("/landing");  // Navigate to the dashboard on successful login
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="grid place-items-center h-screen md:mx-0 mx-5">
      <div className="px-5 shadow-lg p-5 rounded-lg border-t-4 border-black">
        <h1 className="text-4xl font-bold my-4 text-center  pb-5">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Phone Number</h1>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
          />
          <h1 className="text-2xl font-bold">Password</h1>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
            value={password}
          />
          <button className="bg-green-500 text-white font-bold text-lg cursor-pointer px-6 py-2 rounded-sm">
            Login
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-base py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          {/* <Link className="text-sm mt-3 text-right" href={"/register"}>
            Don&apos;t have an account? <span className="underline">Register</span>
          </Link>   */}
          <Link className="text-sm mt-3 text-right" href={'/termsConds'}>
            I agree with all <span className="text-blue-500 underline">Terms & Conditions.</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
