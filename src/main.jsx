import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
// import {Practices} from './practices.jsx'
// import {Profile} from './components/profilecart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* < Profile/> */}
    {/* <Practices /> */}
  </StrictMode>,
)
