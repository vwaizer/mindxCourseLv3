export const errorHandle=(err,req,res,next)=>{
    
    return res.json({
        error: `${err}`
    })
}