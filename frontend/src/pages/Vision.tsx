import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useUser } from "../hooks/useUser";
import axios from "axios";
import { GoogleChart } from "../components/GoogleChart";

export default function Vision(){
    const token = localStorage.getItem("token");

    const [sensors, setSenors] = useState([]);
    const [sensorId, setSensorId] = useState("");
    const [chartData, setChartData] = useState([]);

    useEffect(() =>{
        if(!token) return;

        const fetchSensors = async () =>{
            try {
                const {data} = await axios.get(`http://localhost:3000/vision/api/sensors`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                setSenors(data);
            } catch (error) {
                console.log("Failed to fetch Sensors", error);
            }
        }

        fetchSensors();
    },[token]);



    const handleConfirm = async() =>{
        try {
            const {data} = await axios.get(`http://localhost:3000/vision/api/sensor/${sensorId}`);

            const formattedData = [
                ["datetime", "value"],
                    ...data.map((item: any) =>[
                        item.datetime,
                        item.value
                ])
            ]

            console.log(formattedData);
            setChartData(formattedData);
        } catch (error) {
            console.log("failed to fetch sensor", error);
        }
    }

    const handleSensorChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        setSensorId(e.target.value);
        console.log("Sensor id:", e.target.value);
    };

    return(   
    <div>
        <Navbar/>
        <h1>Vision Page</h1>
        <h2>Select a sensor</h2>
        <select value={sensorId} className="select" onChange={handleSensorChange}>
            <option disabled={true}>Pick a Sensor</option>
            {
                sensors.map((sensor: any) =>(
                    <option key={sensor.id} value={sensor.id}>{sensor.name}</option>
                ))
            }
        </select>
        <button onClick={handleConfirm}>Confirm</button>
        <GoogleChart data={chartData}/>
    </div>
    )
}