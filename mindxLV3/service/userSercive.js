import { User } from "../Schema/USerSchema.js";
import { databaseUnit } from "../service/database/database.js";
 class UserService{
    async register(payload){
        
        const result= await databaseUnit.users().insertOne(new User(payload))
        return 1
    }
}
export const userService= new UserService();