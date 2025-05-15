"use client";
import Link from "next/link";
import { use, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1> Login</h1>
      <hr />
      
<label htmlFor="email">email</label>
      <input
      className="border-2 border-gray-300 rounded-md p-2 mb-4"
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />

<label htmlFor="username">Username</label>
      <input
      className="border-2 border-gray-300 rounded-md p-2 mb-4"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="*********"
      />


    <button
    onClick={onLogin}
      className="bg-blue-500 text-white rounded-md p-2 mb-4"> Sign Up here</button>

      <Link href="/signup">if didnt have an account</Link>
    </div>
  );
}
