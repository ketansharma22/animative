import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Start from './screens/Start'
import About from './screens/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Start/>
      {/* <About/> */}
    </>
  )
}

export default App
