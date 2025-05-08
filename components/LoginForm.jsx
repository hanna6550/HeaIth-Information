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
    <div className="flex items-center justify-center min-h-screen px-4 md:px-0">
  <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md border-t-4 border-black">
    <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Login</h1>

    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Phone Number */}
      <div>
        <label className="text-lg font-semibold block mb-1">Phone Number</label>
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Password */}
      <div>
        <label className="text-lg font-semibold block mb-1">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Password"
          value={password}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition duration-300"
      >
        Login
      </button>

      {/* Error Message */}
      {error && (
        <div className="bg-red-500 text-white px-3 py-2 rounded-md text-sm text-center">
          {error}
        </div>
      )}

      {/* Terms & Conditions Link */}
      <Link href="/termsConds" className="text-sm text-right hover:underline mt-2">
        I agree with all <span className="font-medium text-blue-500">Terms & Conditions</span>.
      </Link>
    </form>
  </div>
</div>

  );
}
