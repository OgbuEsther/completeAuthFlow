import gameModel from "../model/gameModel";
import { Request, Response } from "express";
import { emailEnv } from "../utils/email";
import crypto from "crypto";
import bcrypt from "bcrypt"



export const createGame = async (req: Request, res: Response) => {
    try {
      const {
        name,
        details,
       
      } = req.body;
  
      const getDate = new Date().toDateString()
  
   
      const user = await gameModel.create({
        name,
     details,
      });
      return res.status(201).json({
        message: "created and mail sent",
        data: user,
      
      });
    } catch (error:any) {
      return res.status(400).json({
        message: "erroor",
        data : error,
        err: error.message
      });
    }
  };
  

  //get all
export const getAllGames = async (req: Request, res: Response) => {
    try {
      const user = await gameModel.find();
  
      return res.status(201).json({
        message: "created",
        data: user,
      });
    } catch (error) {
      return res.status(400).json({
        message: "erroor",
      });
    }
  };

  //get one
  export const getOne = async (req: Request, res: Response) => {
    try {
      const user = await gameModel.findById(req.params.gameId);
  
      return res.status(201).json({
        message: "created",
        data: user,
      });
    } catch (error) {
      return res.status(400).json({
        message: "erroor",
      });
    }
  };