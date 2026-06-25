import UserModel from "../models/User.js";
import bcryptjs from "bcryptjs"
const Register=async(req,res)=>{
    try {
       const {
        userName,
        email,
        password,
        profileImage
       }=req.body;
       if(!userName || !email || !password){
        return res.status(303).json({success:false,message:'Please provide all required fields'});
       }

       const ExistUser = await UserModel.findOne({email});
       if(ExistUser){
        return res.status(402).json({success:false,message:'User already exists Please Login'});
       }

       const hasedPassword = await bcryptjs.hash(password,10);

       const newUser = new UserModel({
        userName,
        email,
        password:hasedPassword,
        profileImage: profileImage || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
       });
       await newUser.save();
       return res.status(201).json({success:true,message:'User Register successfully', user:newUser});
    } catch (error) {
        return res.status(500).json({success:false,message:'Internal server error'});
    }
}

const Login=async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({success:false,message:'Please provide all required fields'});
        }

        const FindUser = await UserModel.findOne({email});
         if(!FindUser){
            return res.status(404).json({success:false,message:'Account Not found Please Register'});
        }

        const CheckPassword = await bcryptjs.compare(password,FindUser.password);
        if(!CheckPassword){
            return res.status(403).json({success:false,message:'Invalid password'});
        }
        return res.status(200).json({success:true,message:'User logged in successfully', user:FindUser});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:'Internal server error'});
    }
}

export {Register,Login}   