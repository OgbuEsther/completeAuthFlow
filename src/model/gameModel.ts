import mongoose, { Document , Schema , model } from "mongoose"

interface iUser {
name: string,
details: string,


}


interface User extends iUser , Document{}

const userSchema = new Schema ({
    name: {
        type: String,
        
    },
    details: {
        type: String,

    },
  

}, {timestamps: true})


const gameModel = model<User>("games" , userSchema)

export default gameModel