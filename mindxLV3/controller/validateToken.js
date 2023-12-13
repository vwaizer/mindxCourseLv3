import jwt from "jsonwebtoken";
import { checkToken, createToken, createTokenLogin } from "../ultis/ultis.js";
import { token } from "morgan";

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
  
  return res.json({decode:result,token});
  
};
export const createLoginAccess= async(req,res)=>{
  const encrypt ={username:req.username,password:bcrypt.hashSync(req.body.password,10)};
  const token=  await createTokenLogin(req.body,privateKey);
  return res.json({token});
}
export const makeToken= async (req,res,next)=>{
    const result=  await createToken(privateKey);
 
    return res.json({
      token:result
    });
}
