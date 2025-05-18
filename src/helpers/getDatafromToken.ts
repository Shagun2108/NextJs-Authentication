import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { error } from "console";

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || null;
     const decodedToken :any = jwt.verify( token  !, process.env.TOKEN_SECRET!);

     return decodedToken.id;
  } catch (error: any) {
    console.log(error.message);
  }
};
