import { useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signup(){
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) =>{
        try {
            e.preventDefault();
            console.log("Hello", user, password); 
            const res = await axios.post("http://localhost:3000/api/signup",{
                user,
                password,
                email
            })
            console.log("Sign up Success:",res.data);
        } catch (error) {
            console.log("Failed to Sign up:", error);
        }
    };

    return(
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={handleSignup}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend m-auto mt-2.5">Sign up</legend>

                    <label className="label">User</label>
                    <input type="text" className="input" placeholder="username"  value={user} onChange={(e) => setUser(e.target.value)}/>

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password"   value={password} onChange={(e) => setPassword(e.target.value)}/>

                    <label className="label">Email</label>
                    <input type="text" className="input" placeholder="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <button type="submit" className="btn btn-neutral mt-4">Sign up</button>
                    <label className="m-auto">Already Sign in <Link to="/login" className="text-green-500">Login</Link></label>
                </fieldset>
            </form>
        </div>
    )
}
