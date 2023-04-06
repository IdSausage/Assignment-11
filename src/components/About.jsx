import { Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import '../App.css'

export default function About()
{
    const navigate = useNavigate();

    return (
        <div className="app">
          <Typography variant="h2">This is About page</Typography>
          <button onClick={() => navigate('/Home')} className="button">Redirect</button>
          <nav className="navbar">
            <NavLink to={"/Home"}>Home</NavLink>
            <NavLink to={"/About"}>About</NavLink>
            <NavLink to={"/Contact"}>Contact</NavLink>
            <NavLink to={"/Profile"}>Profile</NavLink>
            <NavLink to={"/Admin"}>For Admin!!</NavLink>
          </nav>
        </div>
      );
}