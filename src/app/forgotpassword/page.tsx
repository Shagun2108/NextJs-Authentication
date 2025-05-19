"use client";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export  default function  forgotPassword() {

    const [emailAddress, setEmailAddress] = useState<string>("");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);


    const router = useRouter();


    function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEmailAddress(e.target.value);
    }

    function singUpRoute() {
        router.push("/login");
    }
    const handleSubmit = async () => {
        try{
            setTimeout(()=>{
                console.log("timeout");
                
            },5000)

        }catch(error){
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    }

    return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
  <div className="w-full max-w-md bg-white p-8 rounded shadow">
    <h1 className="text-2xl  text-gray-600 font-bold mb-4 text-center">Forgot Password</h1>
    <hr className="mb-4" />
    <p className="text-sm text-gray-600 mb-6 font-medium text-center">
      Please enter your email address to search for your account.
    </p>
    <hr className="mb-4" />
    <div className="mb-6">
      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
      <input
        id="email"
        type="email"
        value={emailAddress}
        onChange={handleEmailChange}
        className="w-full border-2 border-gray-300  text-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="you@example.com"
      />
    </div>
    <div className="flex justify-end gap-4">
      <button onClick = {handleSubmit } className= "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200">
        Submit
      </button>
      <button onClick={singUpRoute} className = {` hover:bg-gray-300 text-black px-4 py-2 rounded-md transition-colors duration-200 ${loading?'bg-gray-400 cursor-not-allowed':'bg-gray-200'}` }>
        Cancel
      </button>
    </div>
  </div>
</div>


    );

}