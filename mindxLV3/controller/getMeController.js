import { databaseUnit } from "../service/database/database.js"
import { ObjectId } from "mongodb";
export const getMeController=async (req,res)=>{
    const unit=await databaseUnit.post().findOne({_id:new ObjectId(req.body.userID)});
   
    const decodeHash= await databaseUnit.post().aggregate([
        {
          '$match': {}
        }, {
          '$lookup': {
            'from': 'hashtag', 
            'localField': 'hashtags', 
            'foreignField': 'hashID', 
            'as': 'hashtags'
          }
        }
      ]).toArray();
    console.log(decodeHash);

    return res.json(decodeHash)
}