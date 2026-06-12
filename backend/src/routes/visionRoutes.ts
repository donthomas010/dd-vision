import express from "express";
import { getSensorValues, getVisionNames } from "../controller/visionController.ts";

const visionRouter = express.Router();

visionRouter.get("/", (req, res) =>{
    res.json({message: "vision result"})
});

visionRouter.get("/api/sensors/:id", getVisionNames);
visionRouter.get("/api/sensor/:id", getSensorValues);


export default visionRouter;