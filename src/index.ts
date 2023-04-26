import express, { Application, Request, Response } from "express"
import cors from "cors"

import { dbConfig } from "./config/db"
import { mainApp } from "./app"


const PORT = 5123


const app:Application = express()
mainApp(app)
dbConfig()


app.get("/" , (req:Request , res:Response)=>{
    return res.status(200).json({
        message :"api is up and running"
    })
})

const server = app.listen(PORT , ()=>{
    console.log(`server is up on port ${PORT}`)
})

process.on("uncaughtException", (errorr: Error) => {
    console.log("shutting down server")
    process.exit(1)
})
process.on("unhandledRejection", (reason: Error) => {
    console.log("shutting down server")
    process.exit(1)

    server.close(()=>{
console.log(`error`)
    })
})