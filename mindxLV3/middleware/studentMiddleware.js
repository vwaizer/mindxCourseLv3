export const validator=(req,res,next)=>{
    let username=req.body.username;
    let password=req.body.password;
    var passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const validateEmailRegex = /^\S+@\S+\.\S+$/;
   
    if(passwordRegex.test(password) && validateEmailRegex.test(username) ){
        next();
    }
    else
    {
        throw new Error("Sai username or password");
    }
}