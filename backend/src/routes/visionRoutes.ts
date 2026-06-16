import express from "express";
import { getSensorValues, getVisionNames } from "../controller/visionController.ts";
import { authenticateToken } from "../middleware/signMiddleware.ts";

const visionRouter = express.Router();

visionRouter.get("/", (req, res) =>{
    res.json({message: "vision result"})
});

visionRouter.get("/api/sensors/", authenticateToken, getVisionNames);
visionRouter.get("/api/sensor/:id", getSensorValues);


export default visionRouter;