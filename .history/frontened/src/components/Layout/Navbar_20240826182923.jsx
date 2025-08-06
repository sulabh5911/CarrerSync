import React,{useContext,useState} from 'react'
import {Context} from '../../main'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show,setShow]=useState(false);
  const {isAuthorized,setIsAuthorized,user}=useContext(Context);
  
  return (
    <div>Navbar</div>
  )
}

export default Navbar