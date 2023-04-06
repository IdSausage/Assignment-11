import { Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import '../App.css';


export default function Admin(userlogin)
{
    const LoginCheck = () => {
      if (userlogin === true) {
        navigate("/Home");
      }
    };

    const navigate = useNavigate();

    return(
        <div className='app'>
        <img src="../src/assets/Pongkhun.jpg" alt="admin picture" />
        <Typography variant="h2">This is Admin page</Typography>
        <button onClick={LoginCheck} className="button">Logout</button>
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