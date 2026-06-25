import mongoose from 'mongoose';

const UserSchema= new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
        default:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    }
},{
    timestamps:true
})

export default mongoose.model('User',UserSchema)