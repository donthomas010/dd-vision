import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddSensor(){
    const token = localStorage.getItem("token");
    const [sensorName, setSensorName] = useState("");
    const navigate = useNavigate();



    const handleConfirm = async() =>{
        try {
            const {data} = await axios.get(`http://localhost:3000/vision/api/addSensor/${sensorName}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
            );

            navigate("/vision");
        } catch (error) {
            console.log("failed to fetch sensor", error);
        }
    }

    return(   
    <div>
        <Navbar/>
        <h1>Vision Page</h1>
        <h2>Create a sensor</h2>
        <input type="text" placeholder="neutral" className="input input-neutral" value={sensorName} onChange={(e) => setSensorName(e.target.value)}/>
        <button onClick={handleConfirm}>Confirm</button>
    </div>
    )
}