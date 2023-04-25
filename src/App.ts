import express, { Application, Request, Response } from "express";
import cors from "cors";
import user from "./router/userroutes";
import ejs from "ejs"
import game from "./router/gameRoutes";


const data = {
    name : "Esther",
    color : "red"

}


export const mainApp = async (app: Application) => {
  app.use(cors());

  app.use("/api/auth", user);
  app.use("/api/game", game);
};
