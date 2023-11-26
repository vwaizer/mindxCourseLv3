import fs from "fs"
import path from "path";
let a=fs.readFileSync("students.json");
a=JSON.parse(a);
export const addStudent=(rep,res)=>{
    console.log(path.resolve());
    let stu=rep.body;
    const enterStu=[...a,stu];
    fs.writeFileSync("students.json",JSON.stringify(enterStu));
    return res.json(a)
  }
  export const getStudent=(rep,res)=>{
    return res.json(a)
  }
  export const getStudentFilter=(rep,res)=>{
    if(rep.query){
    
      if(rep.query.id){
        const result=a.filter((item)=> item.id == rep.query.id)
      res.json(result)
      }
      else if(rep.query.age){
        const result=a.filter((item)=> item.age == rep.query.age)
      res.json(result)
      }
      else if (rep.query.name){
        const result=a.filter((item)=> item.name == rep.query.name)
      res.json(result)
      }
    }
    else{
      res.json(a)
    }
  
  }
  export const deleteStudent=(rep,res)=>{
    
    let deleteIndex= a.findIndex((item)=>{
      return item.id == rep.query.deleteID
    })
    console.log(deleteIndex);
    // if(deleteIndex >=0){
    //   if(deleteIndex > 0){
    //     a.splice(deleteIndex,1)
    //   }
    //   else{
    //     a.splice(0,deleteIndex+1)
    //   }
      
    // }
    a.splice(deleteIndex,1)
   
    fs.writeFileSync("students.json",JSON.stringify(a));
    console.log(a);
    return res.json(a);
  }
 export const pagingStudent=(rep,res)=>{
  if(rep.query){
    if(!rep.query.limit || !rep.query.page){
      res.status(400).json("Missing limit or page ")
    }
    if(rep.query.limit < 1 || rep.query.page <1){
      res.status(400).json("Error")
    }
    let startPoint=(rep.query.page-1)*(rep.query.limit);
    let endPoint= startPoint+ 1*rep.query.limit;
    const result= a.filter((item,index)=> {

      return index>=startPoint && index<endPoint;
    });
    if(result.length == 0){
      res.json("empty")
    }
    return res.json(result);
  }
    
 }
