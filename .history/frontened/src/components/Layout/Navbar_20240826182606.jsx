import React from 'react'

const Navbar = () => {
  const [show,setShow]=useState(false);
  const {isAuthorized,setIsAuthorized,user}=useContext(Context)
  return (
    <div>Navbar</div>
  )
}

export default Navbar