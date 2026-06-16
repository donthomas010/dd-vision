import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar(){

        const username = localStorage.getItem("username");
        const navigate = useNavigate();

        const handleLogout = () => {
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            navigate("/login")
        }
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
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Welcome {username}</a>
                <button onClick={handleLogout}>Logout</button>
            </div>
            </div>
        </header>
    )
}