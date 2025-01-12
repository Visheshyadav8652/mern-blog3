import User from "../models/user.models.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utlis/error.js";


export const signup = async (req, res,next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(400,'Please fill in all fields'));
    }

    const hashedPassword = bcryptjs.hashSync(password,10);

    const newUser = new User({
        username,
        email,
        password:hashedPassword,
    });
    try {

        await newUser.save();
        res.json('signup successfully.');
    } catch (error) {
        next(error);
    }
}