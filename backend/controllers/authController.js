import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const register = async(req,res,next)=>{
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password,salt); 
       try {
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword,
            photo:req.body.photo
        });

        await newUser.save();
        res.status(200).json({success:true,message:'Successfully registered!'});
    } catch (err) {
        res.status(500).json({success:false,message:'Unable to register the User!!'});
    }
}

export const login = async(req,res,next)=>{
    try {
        const email = req.body.email;
       const user = await User.findOne({email});
       if(!user){
        res.status(404).json({success:false ,message:'User not Found!!'});
       }
       const checkpassword = await bcrypt.compare(req.body.password,user.password);

       if(!checkpassword){
        return res.status(401).json({success:false,message:'User password is incorrect'});
       }

       const {password,role,...rest}=user._doc;

       const token = jwt.sign({id:user._id,role:user.role}, process.env.JWT_SECRET_KEY,{expiresIn:'15d'});

       // set token in browser cookies and send it to the client in the response

       res.cookie('accessToken',token,{
        httpOnly:true,
        expiresIn:token.expiresIn  //expires: ?? [doubt]
       }).status(200).json({token, role, success:true,message:'LoggedIn Successfully!!' ,data:{...rest}});
    } catch (err) {
        console.log(err);
        return res.status(401).json({success:false,message:'Failed To Login'});
    }
}