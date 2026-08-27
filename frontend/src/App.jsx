
import { useState } from 'react'
import './App.css'

function App() {
  const [message,setMessage] = useState("Hello Here is Your response");
  const [input,setInput] = useState("")

  const connectBackend=async()=>{
    const response = await fetch("http://localhost:5000/api/chat",{
      method: "POST",
      headers: {
        "content-Type":"application/json",
      },
      body:JSON.stringify({
        message: input,
      }),
    })
    const data = await response.json();

    setMessage(data.message);

  }
   return(
    <>
    <h1>My AI project</h1>
    <input type="text" placeholder='Type your message...' value={input} onChange={(e)=>setInput(e.target.value)} />

    <button onClick = {connectBackend}>Send</button>
    <p>{message}</p>
    </>
    
   )
}

export default App
