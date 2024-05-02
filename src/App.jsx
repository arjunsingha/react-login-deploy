import { useState } from 'react'
import SignUp from "./SignUp";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
