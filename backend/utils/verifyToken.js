import jwt from 'jsonwebtoken'

export const verifyToken = (req,res,next)=>{
   // First check for token in cookies
   let token = req.cookies.accessToken;
   
   // If not in cookies, check Authorization header
   if (!token && req.headers.authorization) {
     const authHeader = req.headers.authorization;
     if (authHeader.startsWith('Bearer ')) {
       token = authHeader.split(' ')[1];
     }
   }
   
   if(!token){
    return res.status(401).json({success:false,message:'Not an Authorized User'});
   }

   jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
    if(err){
        return res.status(401).json({success:false,message:'Invalid Token'});
    }
    req.user=user;
    next();
   })
}

export const verifyUser = (req,res,next)=>{
    // Just verify the token - this will execute next() if the token is valid
    verifyToken(req,res,next);
}

export const verifyAdmin= (req,res,next)=>{
    verifyToken(req,res,next,()=>{
       if(req.user.role==='admin'){
        next();
       }
       else{
        return res.status(401).json({success:false,message:'You are not authorize'});
       }
    })
}