import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


export const Context=createContext({isAuthorized:false});

const AppWrapper=()=>{
  const[isAuthorized,set]
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
