import express, { Application, Request, Response } from "express"
export  const app:Application = express()
import cors from "cors"

// parsers
app.use(express.json())
app.use(cors())

//create route
const userRoute = express.Router()

//middlewars
app.use("/api/v1/users",userRoute)



app.get('/', (req:Request, res:Response) => {
  res.status(200).json({
    success:true,
    message:"welcome to Tours And Travels server"
  })
})


userRoute.get("/all-user",(req,res)=>{
  const users = [
    {id:1,
    name:"name1"},
    {id:2,
    name:"name 2"}
  ]
  res.status(200).json({
    success:true,
    data:users
  })
})


export default app;
