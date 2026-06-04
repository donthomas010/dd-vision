
import type { Request, Response } from "express";
import prisma from "../../config/prisma.ts";

export const userLocation = async (req: Request, res: Response) =>{
    try {
        const userId = Number(req.params.id);
        console.log({userId})
        const locations = await prisma.location.findMany({
            where:{
                id_login: userId
            }
        })
        console.log(locations)
        res.status(201).json(locations)

    } catch (error) {
        console.log("Error to userLocation:", error);
        res.status(500).json({message: "Internal Error"})
    }finally{
        await prisma.$disconnect();
    }
}

export const login = async (req: Request, res: Response) =>{
    try {
        const {user, password} = req.body;
        console.log({user, password});
        const loginUser = await prisma.login.findFirst({
            where: {
                user,
                password
            }
        });

        if(!loginUser){
            res.status(400).json({message: "login failed, try again"});
            return;
        }
        res.status(200).json(loginUser);
        
    } catch (error) {
        console.log("Error to login:", error);
        res.status(500).json({message: "Internal Error"})
    }finally{
        await prisma.$disconnect();
    }
}


export const signup = async(req: Request, res: Response) =>{

    try {
        const {user,password, email} = req.body;
        console.log({user, password, email});
        const newUser = await prisma.login.create({
        data: {
            user,
            password,
            email
            }
        })
        console.log("New User created:", newUser);
        res.status(201).json(newUser);
        
    } catch (error) {
        console.log("Error to Signup:", error);
        res.status(500).json({message: "Internal Error"})
    } finally{
        await prisma.$disconnect();
    }

}