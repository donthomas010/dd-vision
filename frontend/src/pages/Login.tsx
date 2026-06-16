import { useState } from "react"
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login(){
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) =>{

        try {
            e.preventDefault();
            console.log("Hello", user, password); 
            const res = await axios.post("http://localhost:3000/api/login",{
                user,
                password
            })
            console.log("login Success:",res.data.token);

            localStorage.setItem(
                "token",
                res.data.token
            );

            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("username", user);
                navigate("/home");
                } else {
                console.log("No token received");
            }
            //navigate("/home");
        } catch (error) {
            console.log("Failed to login:", error);
        }
    };

    return(
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={handleLogin}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend  m-auto mt-2.5">Login</legend>

                    <label className="label">User</label>
                    <input type="text" className="input" placeholder="username"  value={user} onChange={(e) => setUser(e.target.value)}/>

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password"   value={password} onChange={(e) => setPassword(e.target.value)}/>

                    <button type="submit" className="btn btn-neutral mt-4">Login</button>

                    <label className="m-auto">Already sign in <Link to="/signup" className="text-green-500">Sign up</Link></label>
                </fieldset>
            </form>
        </div>
    )
}
