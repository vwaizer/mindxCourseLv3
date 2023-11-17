import fs from "fs"
import path from "path";

export const addStudent=(stu,dataBase)=>{
    console.log(path.resolve());
    let a=JSON.parse(dataBase)
    const enterStu=[...a,stu];
    fs.writeFileSync("students.json",JSON.stringify(enterStu));
  }
