import { NavLink, useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import '../App.css';

export default function Profile()
{
    const {id} = useParams();

    return(
        <div className='app'>
        <Typography variant="h2">This student id of user is {id}</Typography>
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