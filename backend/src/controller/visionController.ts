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
    const userId = req.user.id;
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

//add new sensors'
export const addSensor = async(req: Request, res: Response) =>{
    // console.log(req.user.id);
    // res.status(200).json({message: req.user.id});

    try {
        const {sensorName} = req.body;
        const userId = req.user.id;
        console.log({sensorName});
        const newSensor = await prisma.sensor_name.create({
        data: {
            name: sensorName,
            id_user: userId,
            }
        })
        console.log("New User created:", newSensor);
        res.status(201).json(newSensor);
        
    } catch (error) {
        console.log("Error to create new sensor:", error);
        res.status(500).json({message: "Internal Error"})
    } finally{
        await prisma.$disconnect();
    }
}