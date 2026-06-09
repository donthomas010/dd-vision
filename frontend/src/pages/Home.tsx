import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";

export default function Home(){
    const { user } = useUser();
    const [userLocations, setUserLocations] = useState<any[]>([]);

    // Fetch locations when user is ready
    useEffect(() => {
        const fetchLocations = async () => {
        if (!user?.id) return;

        const { data } = await axios.get(
            `http://localhost:3000/api/locations/${user.id}`
        );

        setUserLocations(data);
        };

        fetchLocations();
    }, [user?.id]);
    console.log(userLocations);

    return(
        <div>
            <Navbar/>
            <div className="flex items-center justify-center mt-5">
            <table className="table w-5xl border-2">
                {/* head */}
                <thead>
                <tr>
                    <th>id</th>
                    <th>location id</th>
                    <th>location</th>
                </tr>
                </thead>
                <tbody>
                {/* row 2 */}
                {userLocations.map((place:any, index: number) => (
                    <tr key={index}>
                        <th>{index+1}</th>
                        <td>{place.id}</td>
                        <td>{place.locationName}</td>
                    </tr>
                    ))}
                
                </tbody> 
            </table>
            </div>
        </div>
    )
}