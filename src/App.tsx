import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function getBody(path: string) {
  if (path.includes('bedtime')) {
    return <>body</>
  }
  return <>other</>
}
function App() {
  const [count, setCount] = useState(0)
  const path = window.location.pathname
  const body = getBody(path)
  return <>{body}</>
}

export default App
