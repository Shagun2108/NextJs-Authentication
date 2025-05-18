"use client"
import axios from "axios"
import Link from "next/link"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { useState } from "react"
import User from "@/models/userModel"

export default function Profile() {
    const  router = useRouter();
    const  [data, setData] = useState('');

    const logout = async () => {
        try{
            const ref = await axios.get("/api/users/logout");
            toast.success(ref.data.message);
            router.push("/login");

        }catch(error:any){
            console.log(error.message);
    }
}

const userDetails = async() => {
    const res =  await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
       
}

//put this thing in a useEffect to get the data from the api and set it to the state
//     const res = await axios.get("/api/users/me");

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1> Profile</h1>
            <hr />
            <h2> Welcome to your profile page</h2>
            <h2> {data == '' ? "No profile to show" : <Link href = {`/profile/${data}`}> {data}</Link>}</h2>
            <button
            onClick= {userDetails}
             className="bg-green-500 text-white px-4 py-2 rounded-md mt-4">
                profile details
            </button>
            <button
            onClick={logout}
             className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
                Logout
            </button>
        </div>
    )

}
