import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcrypt from 'bcryptjs';

export const sendEmail = async ({email,emailType,userId} :any) =>{
    try{
    //  create a hashed token
      const hashedToken=  await bcrypt.hash(userId.toString(),10)

      console.log("hashed token",hashedToken);
      

      if(emailType === "verify"){ 
        console.log("inside verify email");

        await User.findByIdAndUpdate(userId,
            {verifyToken:hashedToken, verifyTokenExpiry:Date.now() + 3600000},
            {new:true, runValidators:true})

       }else if(emailType === "reset"){
        await User.findByIdAndUpdate(userId,
            {forgotPasswordToken:hashedToken, forgotPasswordTokenExpiry:Date.now() + 3600000},
            {new:true, runValidators:true})
      }

        // Looking to send emails in production? Check out our Email API/SMTP product!
    var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8bab72ea276b94",
      pass: "0794e77824c49a"
      //TODO add these token to .env variables
    }
  });

  const mailOptions ={
    from:"shagunrana21@gmail.com",
    to: "shagunrana21@gmail.com",
    subject: emailType === "verify" ?"Verify your email":"reset your password",
    html:`<p>Click <a href = "${process.env.domain}/verifyemail?token=${hashedToken}">here</a> to ${emailType ==='verify'?'verify your emial':'reset your password'}
    or copy paste the link below in brower</p>`
  }


  const mailresponse = await transport.sendMail(mailOptions);
  return mailresponse;

    }catch(error:any){
        console.log("error in sending email" + error.message)
;
        
    }

}