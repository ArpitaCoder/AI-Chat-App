
import { useState } from 'react'
import './App.css'

function App() {
  const [messages,setMessages] = useState([]);
  const [input,setInput] = useState("")
  const [loading,setLoading]=useState(false)

  const connectBackend=async()=>{
    if(!input.trim() || loading) return;
    // input.trim()removes spaces from biginning and end of string    
    setLoading(true);
    try{
      const response = await fetch("http://localhost:5000/api/chat",{
        method: "POST",
        headers: {
          "content-Type":"application/json",
        },
        body:JSON.stringify({
          message: input,
          history:messages,
        })
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
      setLoading(false)
    }catch(Err){
      console.log(Err);;
    }
    finally{
      setLoading(false);
    }
    

  }
  const handleKeyDown = (e)=>{
    if(e.key==="Enter"){
      connectBackend();
    }
  }
   return(
    <>
    <h1>My AI project</h1>
    <input type="text" placeholder='Type your message...' value={input} onChange={(e)=>setInput(e.target.value) } onKeyDown= {handleKeyDown} />

    <button onClick = {connectBackend} disabled={loading}>{loading ?"Thinking... ":"Send"}</button>
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
