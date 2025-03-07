import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const register = async (req, res, next) => {
    try {
        const { username, email, password, photo } = req.body;

        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Username or email already exists. Please choose another one.",
            });
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            photo
        });

        await newUser.save();
        return res.status(200).json({ success: true, message: 'Successfully registered!' });
    } catch (err) {
        console.error("Registration Error:", err.message);
        res.status(500).json({ success: false, message: 'Unable to register the User!!' });
    }
}

export const login = async (req, res, next) => {
    try {
        const { email} = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not Found!!' });
        }
        const checkpassword = await bcrypt.compare(req.body.password, user.password);

        if (!checkpassword) {
            return res.status(401).json({ success: false, message: 'Incorrect password' });
        }

       const {password,role,...rest}=user._doc;

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: '15d' });

        res.cookie("accessToken", token, {
            httpOnly: true,
            maxAge: 15 * 24 * 60 * 60 * 1000, 
        });

        return res.status(200).json({
            token,
            role,
            success: true,
            message: "Logged In successfully!",
            data: { ...rest },
        });
    } catch (err) {
        console.error("Login Error:", err.message);
        return res.status(500).json({ success: false, message: 'Failed To Login' });
    }
}