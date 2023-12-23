import { ObjectId } from "mongodb";
export class Hashtag{
    constructor(content){
        this.hashID=new ObjectId();
        this.content=content;
    }
}