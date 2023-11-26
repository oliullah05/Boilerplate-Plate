import express, { Application, Request, Response } from "express"
export  const app:Application = express()
import cors from "cors"

// parsers
app.use(express.json())
app.use(cors())


//middlewars
const userRoute = express.Router()


app.get('/', (req:Request, res:Response) => {
  res.status(200).json({
    success:true,
    message:"welcome to Tours And Travels server"
  })
})

app.use("/api/v1/users",userRoute)
userRoute.get("/all-user",(req,res)=>{
  const users = [
    {id:1,
    name:"laskdjs"},
    {id:1,
    name:"laskdjs"}
  ]
  res.status(200).json({
    success:true,
    data:users
  })
})
export default app;
