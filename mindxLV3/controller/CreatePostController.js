import { Hashtag } from "../Schema/HashtagSchema.js";
import { Post } from "../Schema/PostSchema.js"
import { databaseUnit } from "../service/database/database.js"

export const createPostController=(req,res)=>{
    
    const hashList=req.body.hashtags.map((item)=>{
        
        const hashItem=new Hashtag(item);
        
        databaseUnit.hashtag().insertOne(hashItem);
        console.log("vao");
        return hashItem.hashID;
    });
    
    req.body.hashtags=hashList;
    databaseUnit.post().insertOne(new Post(req.body));

    return res.json("post complete")
}