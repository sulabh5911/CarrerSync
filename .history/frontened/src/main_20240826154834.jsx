import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


export const Context=createContext({isAuthorized:false});

const AppWrapper=()=>{
  const[isAuthorized,setAuthorized]=useState(false);
}
return(
  <Context.Provider
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
