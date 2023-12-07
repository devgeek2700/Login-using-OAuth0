import { useState } from 'react'
import Login from './Login'
import Home from './Home'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Login/> */}
     <Navbar />
     <Home/>
    </>
  )
}

export default App
