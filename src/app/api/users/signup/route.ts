import {connectDB} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connectDB();

export async function POST (request :NextRequest){
    try{

      const reqBody=  await request.json();
      
      const {userName ,email, password} = reqBody

       console.log(userName,email,password);;
    
       //do my aown validation
       console.log("reqBody", reqBody);

 
      if(!userName || !email || !password) {
        return NextResponse.json({error:"please fill alll the fields"},{
            status:400
        })
      }

      const user = await User.findOne({email});
      if(user){
        return NextResponse.json({error:"User already exists"},
            {status:400})
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt .hash(password,salt);

      const newUser = await User.create({
        userName,
        email,
        password:hashedPassword
      })

      const  savedUser = await newUser.save();

      await sendEmail({email,emailType:"verify",userId:savedUser._id})

      return NextResponse.json({message:"User created successfully",sucess:true,
        savedUser},{status:201})

    }catch(error :any){
        return NextResponse.json({error:error.message},
            {status:500})
    }
}