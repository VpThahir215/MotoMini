import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import UserLayout from './layouts/UserLayout'


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <AppRoutes/>
    </>
  )
}

export default App
