import express from "express"
import cors from "cors"
const app = express()
app.use(cors(
    {
        origin:"http://localhost:3000"
    }
))
app.get("/" , (req, res)=>{
    console.log("Hello World")
    res.sendStatus(200)
})
app.listen(5000 , ()=>{
    console.log("Server is running on port 5000")
})