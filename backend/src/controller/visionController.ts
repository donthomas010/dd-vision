import prisma from "../../config/prisma.ts";
import type { Request, Response } from "express";

//get vision values
export const getSensorValues = async (req: Request, res: Response) => {
    const sensorId = Number(req.params.id);
    try {
        const allSensorValues = await prisma.sensor_values.findMany(
            {
                where:{
                    id_sensor : sensorId
                }
            }
        )
        console.log("sensor values are:", allSensorValues);
        res.status(200).json(allSensorValues);
    } catch (error) {
        console.log("Failed to getVisionValues", error);
        res.status(500).json({message: "Internal failed"});
    }finally{
        prisma.$disconnect();
    }
}

//get all vision names with the user id
export const getVisionNames = async(req: Request, res: Response) =>{
    const userId = Number(req.params.id);
    try {
        const allVisionNames = await prisma.sensor_name.findMany({
            where: {
                id_user: userId
            }
        });
        console.log("vision names ", allVisionNames);
        res.status(200).json(allVisionNames);
    } catch (error) {
        console.log("Failed to getVisionNames", error);
        res.status(500).json({message: "Internal failed"});
    }finally{
        prisma.$disconnect();
    }
    
}