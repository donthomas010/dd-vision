import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export default function Navbar(){

        const {user} = useUser();
    return(
        <header>
            <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl"> DD vision</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/vision">Vision</Link></li>
                    <li><Link to="/profile">profile</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Welcome {user?.user}</a>
            </div>
            </div>
        </header>
    )
}