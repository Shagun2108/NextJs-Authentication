import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required:[ true,"Username is required"],
        unique: true,
    },
    email:{
        type:String,
        reuired:[true,"please enter yout email"],
        unique :true,
    },
    password:{
        type:String,
        required:[true,"please enter your password"],
        minLength:[6,"password must be at least 6 characters"],
        select:false,
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    forgotPasswordToken : String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry :Date
})
 

//const User = mongoose.model('User',userSchema);
const User = mongoose.models.users || mongoose.model('users', userSchema, 'users');
export default User;

