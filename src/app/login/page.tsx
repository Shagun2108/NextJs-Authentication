"use client";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function Login() {

  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    if(user.email.length> 0 && user.password.length > 0){
      setButtonDisabled(false);
    }else{
      setButtonDisabled(true);
    }

  },[user])

  const onLogin = async () => {
try{
  setLoading(true);
  const res = await axios.post("/api/users/login", user);
  console.log(res.data);
  toast.success("login sucesssful");
  router.push("/profile");

}catch(error){
  console.log(error);
  toast.error("Login failed, please try again later");
}finally{
  setLoading(false);
}

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1> {loading? "processing": "Login"}</h1>
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

<label htmlFor="username">Password</label>
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
      className="bg-blue-500 text-white rounded-md p-2 mb-4"> {buttonDisabled? "fill credential":"Login"}</button>

      <Link href="/signup">if didnt have an account</Link>
    </div>
  );
}
