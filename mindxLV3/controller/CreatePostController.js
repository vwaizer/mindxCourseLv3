export const createPostController=(req,res)=>{
    const user_id=req.decoded._id;
    return res.json()
}