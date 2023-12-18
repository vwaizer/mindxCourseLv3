import { databaseUnit } from "../service/database/database.js";
import { userService } from "../service/userSercive.js"

export const registerController=(req,res,next)=>{
  
    const result=userService.register(req.body);
    console.log(result);
    if(result){
        databaseUnit.users().insertOne({})
        return res.json("complete")
    }
    return res.json("incomplete")
}