import {Router} from "express"
import { createGame, getAllGames, getOne } from "../controller/GameController"


const game = Router()

game.post("/newgame" , createGame)
game.get("allgames" , getAllGames)
game.get("/onegame/:gameId" , getOne)



export default game