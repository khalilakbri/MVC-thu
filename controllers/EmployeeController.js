import fs from "fs/promises"
import path from "path"

const index = async(req,res)=>{

    const filePath = path.join(process.cwd(),"src","employee.txt")

    const data = await fs.readFile(filePath,"utf8")
    res.send(data)
}

const create = async (req,res)=>{
    const filePath = path.join(process.cwd(),"src","employee.txt")

    const empName = req.query.name
    await fs.appendFile(filePath,"\n"+empName)
    res.send("Employee added successfuly.")
}

export {index, create}