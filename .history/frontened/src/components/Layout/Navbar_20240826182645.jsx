import React,{useContext,useState} from 'react'
import {}

const Navbar = () => {
  const [show,setShow]=useState(false);
  const {isAuthorized,setIsAuthorized,user}=useContext(Context);
  return (
    <div>Navbar</div>
  )
}

export default Navbar