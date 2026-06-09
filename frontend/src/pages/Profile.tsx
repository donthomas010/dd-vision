import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { useUser } from "../hooks/useUser";
import { Link } from "react-router-dom";

export default function Profile(){
    const { user, updateUser } = useUser();
    const [userProfile, setUserProfile] = useState<any>(null);

    useEffect(() => {
    if (user) {
        setUserProfile(user);
    }
    }, [user]);

    const handleChange = (e: any) => {
        setUserProfile({...userProfile, [e.target.name]: e.target.value});
    };

    const handleUpdate = (e: any) =>{
        e.preventDefault();
        updateUser(userProfile);
    }
    return(
        <div>
            <Navbar />
            <h1>Update user</h1>
            <form onSubmit={handleUpdate}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend m-auto mt-2.5">Sign up</legend>

                    <label className="label">User</label>
                    <input 
                        type="text" 
                        name="user"
                        className="input" 
                        placeholder="username"  
                        value={userProfile?.user} 
                        onChange={handleChange}
                    />

                    <label className="label">Password</label>
                    <input 
                        type="password" 
                        name="password"
                        className="input" 
                        placeholder="Password"   
                        value={userProfile?.password} 
                        onChange={handleChange}
                    />

                    <label className="label">Email</label>
                    <input 
                        type="text" 
                        name="email"
                        className="input" 
                        placeholder="email"  
                        value={userProfile?.email} 
                        onChange={handleChange}
                    />

                    <button type="submit" className="btn btn-neutral mt-4">Sign up</button>
                </fieldset>
            </form>
        </div>
    )
}