import express from "express";
import { getSensorValues, getVisionNames, addSensor } from "../controller/visionController.ts";
import { authenticateToken } from "../middleware/signMiddleware.ts";

const visionRouter = express.Router();

visionRouter.get("/", (req, res) =>{
    res.json({message: "vision result"})
});

visionRouter.get("/api/sensors/", authenticateToken, getVisionNames);
visionRouter.get("/api/sensor/:id", getSensorValues);
visionRouter.get("/api/addSensor/:sensorname",  authenticateToken, addSensor)


export default visionRouter;