import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { store } from './redux/store.js'
import {Toaster} from 'react-hot-toast'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

    <BrowserRouter>
    <App />
    <Toaster
      position="top-center"
  toastOptions={{
    duration: 2000,
    style: {
      background: "black",
      color: "white",
      border: "1px solid #D3AF37",
      padding: "16px",
      borderRadius: "12px",
    },
  }}
    />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
