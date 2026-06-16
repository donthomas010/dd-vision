import express from "express";
import { login, signup, userLocation, userUpdate, profile } from "../controller/signController.ts";
import { authenticateToken } from "../middleware/signMiddleware.ts";

const signRouter = express.Router();

signRouter.get("/", (req, res) =>{
    res.send("Hello Worldss");
});

//Login Check
signRouter.post("/api/login", login);

//Sign up
signRouter.post("/api/signup", signup);
//user location
signRouter.get("/api/locations", authenticateToken, userLocation);
//user profile
signRouter.get("/api/profile", authenticateToken, profile);
//user update
signRouter.put("/api/locations/:id", userUpdate);


export default signRouter;