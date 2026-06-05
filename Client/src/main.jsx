import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import "../src/styles/variables.css"
import "../src/styles/global.css"
import "../src/styles/typography.css"
import App from './App.jsx'
import { AdminAuthProvider } from './admin/context/AdminAuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminAuthProvider>
      <App />
    </AdminAuthProvider>
  </BrowserRouter>
)
