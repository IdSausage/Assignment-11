import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import '../App.css';

export default function Contact()
{
    return (
      <div className="app">
        <Typography variant="h2">This is contact page</Typography>
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