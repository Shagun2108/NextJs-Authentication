"use client"
import axios from "axios"
import Link from "next/link"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

export default function Profile() {
    const  router = useRouter();
    const logout = async () => {
        try{
            const ref = await axios.get("/api/users/logout");
            toast.success(ref.data.message);
            router.push("/login");

        }catch(error:any){
            console.log(error.message);
    }
}

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1> Profile</h1>
            <hr />
            <h2> Welcome to your profile page</h2>
            <p> Here you can see your profile information</p>
            <button
            onClick={logout}
             className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
                Logout
            </button>
        </div>
    )
}
