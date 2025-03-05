import User from "../models/User.js";

export const createUser = async (req, res, next) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json({ success: true, message: "Successfully created", data:savedUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Failed to Create!" });
  }
};

export const updateUser = async(req,res,next)=>{
    const id = req.params.id;
    try {
      const updatedUser = await User.findByIdAndUpdate(id,{
        $set:req.body
      },{new:true}); 
      res.status(200).json({ success: true, message: "Successfully Updated!!", data:updatedUser }); 
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed To Updated!!" });
    }
}

export const deleteUser = async (req,res,next)=>{
    const id = req.params.id;
    try {
       await User.findByIdAndDelete(id); 
      res.status(200).json({ success: true, message: "Successfully deleted!!"}); 
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed To delete!!" });
    }
}

export const getSingleUser = async (req,res,next)=>{
    const id = req.params.id;
    try {
      const user =  await User.findById(id); 
      res.status(200).json({ success: true, message: "Successfully Fetched Single User!!",data:user}); 
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Failed To Fetch!!" });
    }
}

export const getAllUsers = async (req,res,next)=>{
        try {
      const users =  await User.find();
      res.status(200).json({ success: true, message: "Successfully Fetched All Users!!",data:users}); 
    } catch (err) {
        console.log(err);
        res.status(404).json({ success: false, message: "Users Not Found" });
    }
}