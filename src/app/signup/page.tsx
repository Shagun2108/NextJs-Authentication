"use client";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function signup() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.userName.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      router.push("/login");
      toast.success("signup successful");
  
    } catch (error: any) {
      console.log("signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
      setUser({
        email: "",
        password: "",
        userName: "",
      });
      setButtonDisabled(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1> {loading ? " Processing" : "signup"}</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="border-2 border-gray-300 rounded-md p-2 mb-4"
        type="text"
        id="username"
        value={user.userName}
        onChange={(e) => setUser({ ...user, userName : e.target.value })}
        placeholder="username"
      />

      <label htmlFor="email">email</label>
      <input
        className="border-2 border-gray-300 rounded-md p-2 mb-4"
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />

      <label htmlFor="password">password</label>
      <input
        className="border-2 border-gray-300 rounded-md p-2 mb-4"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="*********"
      />

      <button
        onClick={onSignup}
        className="bg-blue-500 text-white rounded-md p-2 mb-4"
      >
        {" "}
        {buttonDisabled ? "No signup" : "SignUp"}
      </button>
      <Link href="/login"> Visit Login page</Link>
    </div>
  );
}



// {
//   "message": "User created successfully",
//   "sucess": true,
//   "savedUser": {
//       "userName": "shagun",
//       "email": "shagunrana21@gmail.com",
//       "password": "$2b$10$Qpk5Udc2KtWVesaB.5AqmuobEQLXRrig5iXfJ.eup5qC9C2B.9F5e",
//       "isVerified": false,
//       "isAdmin": false,
//       "_id": "6826028dc94e240136855d03",
//       "__v": 0
//   }
// }