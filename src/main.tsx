import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Contact} from "./components/Contact.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Contact />
  </StrictMode>,
)