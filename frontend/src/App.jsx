
import { useState } from 'react'
import './App.css'

function App() {
  const [messages,setMessages] = useState([]);
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

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: input,
      },
      {
        role: "ai",
        text: data.message,
      }
    ]);
    setInput("")

  }
   return(
    <>
    <h1>My AI project</h1>
    <input type="text" placeholder='Type your message...' value={input} onChange={(e)=>setInput(e.target.value)} />

    <button onClick = {connectBackend}>Send</button>
    <div>
      {messages.map((msg,index)=>(
        <p key={index}>
          <strong>{msg.role}:</strong>{msg.text}
        </p>
      ))}
    </div>
    </>
    
   )
}

export default App
