import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET() {
    try{
        const response = NextResponse.json({
            message:"logout successful",
            success:true
        });
        response.cookies.set("token","",{
            httpOnly:true,
            secure:true,
            maxAge:0
        })
        return response;

    }catch(error:any){
        return NextResponse.json({error:error.message},
            {status:500})
    }
}