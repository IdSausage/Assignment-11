import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import '../App.css';

export default function Home()
{
    return(
        <div className='app'>
        <Typography variant="h2">Hello world</Typography>
        <nav className="navbar">
          <NavLink to={"/Home"}>Home</NavLink>
          <NavLink to={"/About"}>About</NavLink>
          <NavLink to={"/Contact"}>Contact</NavLink>
          <NavLink to={"/Profile"}>Profile</NavLink>
          <NavLink to={"/Admin"}>For Admin!!</NavLink>
        </nav>
      </div>
    )
}