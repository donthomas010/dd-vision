import express from "express";
import { login, signup, userLocation } from "../controller/signController.ts";

const signRouter = express.Router();

signRouter.get("/", (req, res) =>{
    res.send("Hello Worldss");
});

//Login Check
signRouter.post("/api/login", login);

//Sign up
signRouter.post("/api/signup", signup);
//user location
signRouter.get("/api/locations/:id", userLocation);


export default signRouter;