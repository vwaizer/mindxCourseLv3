import jwt from "jsonwebtoken";
import { checkToken, createToken } from "../ultis/ultis.js";

const privateKey = "abcdef";
export const validateToken = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]
 
  const result= await checkToken(privateKey,token);

  // if(result.username== "admin"){
  //   return res.json("success")
  // }
  // else{
  //   return res.json("fail")
  // }
  return res.json({decode:result});
  
};

export const makeToken= async (req,res,next)=>{
    const result=  await createToken(privateKey);
 
    return res.json({
      token:result
    });
}
