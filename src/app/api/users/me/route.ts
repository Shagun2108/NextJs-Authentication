import { NextResponse } from 'next/server';
import { getDataFromToken } from '@/helpers/getDatafromToken';
import { NextRequest } from 'next/server';
import User from '@/models/userModel';
import { connectDB } from '@/dbConfig/dbConfig';

connectDB();
export  async function GET(request: NextRequest) {

  try {
    const userId = await getDataFromToken(request);
    if (!userId) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    const user = await User.findById(userId).select('-password ');
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json({ message:"userFound ",
        data :user }, 
        { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

}