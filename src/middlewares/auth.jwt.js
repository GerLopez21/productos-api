import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/User'
import Role from "../models/Role"
export const verifyToken = async(req,res,next)=>{
    try{
    const token = req.headers['x-access-token']

    if(!token) return res.status(400).json({message:"No token provided"})


    const decoded = jwt.verify(token,config.SECRET)
    console.log(token)
    console.log('decoded')
    req.userId = decoded.id
    
    const user = await User.findById(req.userId,{password:0})
   

    if(!user) return res.status(404).json({message: "User not found"})
    next();
    }catch(error){
        return res.status(401).json({message: 'Unauthorized'})
    }
}

export const isModerator = async(req,res,next)=>{
    console.log(req.userId )

    const user = await User.findById(req.userId,{password:0})
    const roles =  await Role.find({_id:{$in: user.roles}})
    for(let i = 0; i< roles.length;i++){
        console.log("hola");

        if(roles[i].name == "User"){
            console.log("hola2");

            next();
            return res.status(200).json({message: "Allowed"})

        }
    }
    return res.status(403).json({message: "Not allowed for this action"})
    
}
export const isAdmin = async(req,res,next)=>{
    
}