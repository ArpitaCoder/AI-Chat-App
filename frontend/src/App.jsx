
import { useState } from 'react'
import './App.css'

function App() {
  const [message,setMessage] = useState("Hello Here is Your response");
  const connectBackend=async()=>{
    const response = await fetch("http://localhost:5000/api/chat",{
      method: "POST",
      headers: {
        "content-Type":"application/json",
      },
      body:JSON.stringify({
        message: "Hello backend",
      }),
    })
    const data = await response.json();

    setMessage(data.message);
  }
   return(
    <>
    <h1>My AI project</h1>
    <button onClick = {connectBackend}>ConnectBackend</button>
    <p>{message}</p>
    </>
    
   )
}

export default App
