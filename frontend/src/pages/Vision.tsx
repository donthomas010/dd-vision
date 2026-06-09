import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useUser } from "../hooks/useUser";

export default function Vision(){
        const user = useUser();
        console.log(user);
    return(   
    <div>
        <Navbar/>
        <h1>Vision Page</h1>
    </div>
    )
}