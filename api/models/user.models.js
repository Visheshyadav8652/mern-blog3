import mongoose from "mongoose";

const uesrSchemea = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profilePicture:{
            type:String,
            default:"https://th.bing.com/th/id/OIP.c5KXw-wPcnwyyBNayoXfFQHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
        },
        isAdmin:{
            type:Boolean,
            default:false,
        },
    }, { timestamps: true }
);

const User = mongoose.model('User',uesrSchemea);

export default User;