import axios from "axios";
import { useEffect, useState } from "react";


export function useUser(){
    const [user, setUser] = useState<any>(null);
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("user") || "null");
        setUser(userData);
    }, []);

    const updateUser = async (newUser: any) =>{
        const updatedUser = await axios.put(`http://localhost:3000/api/locations/${user.id}`,{
            user: newUser.user,
            email: newUser.email,
            password: newUser.password
        });
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        console.log("updated profile");
    }
    return {user, updateUser};
}