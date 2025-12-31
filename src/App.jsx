import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Ecommerec Dashboard</h1>
        <Button>Bootstrap Button</Button>
      </div>
    </>
  )
}

export default App
