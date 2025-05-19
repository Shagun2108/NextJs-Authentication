"use client"
import axios from "axios"
import Link from "next/link"
import { useState ,useEffect } from "react"

export default function VerifyEmail() {
    const [token, setToken] = useState("");
    const [verified ,seetVerified] = useState(false);
    const [error, setError] = useState(false);
 

    const verifyUserEmail = async (token:string) => {
    try{

        const response = await axios.post("/api/users/verifyemail", {token});

        console.log("response",response.data);
        if(response.data.success){
            seetVerified(true);
        }else{
            setError(true);
        }

    }catch(error:any){
            console.log("error in verifying email",error.response.data);
            setError(true);
        }

    }

    useEffect( ()=>{
        if(token.length > 0){
            verifyUserEmail(token);
        }
      },[token]);


    useEffect(()=>{
        const url = window.location.search.split("=")[1];
        console.log("url",url);
        setToken(url || "");

     },[]);

     return (
        <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-4xl"> verify email</h1>
        <h2>{token ? `${token}` :"no token"}</h2>

        {verified && (
        <div>
        <h2 className="text-green-500">Email verified successfully</h2>
        <Link href="/login" className="text-blue-500">Login</Link>
        </div>
)}

        {error && (
        <div>
        <h2 className="text-red-500">Email verification failed</h2>
        </div>
 )}

        </div>

   )
 }