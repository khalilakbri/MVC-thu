import express from "express"
import { addNumber } from "./addNumber.js"
import productRouter from '../routes/productRouter.js'
import employeeRouter from '../routes/employeeRouter.js'

const app = express()
app.listen(3000,()=>{
    console.log("Server is running in port 3000")
})

app.use("/products",productRouter)
app.use("/employees",employeeRouter)

app.get("/sum",async(req,res)=>{
    const n1 = Number(req.query.num1)
    const n2 = Number(req.query.num2)

    const result = await addNumber(n1,n2)
    res.send(`<h1>The sum result is ${result}</h1>`)
})



