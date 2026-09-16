
import { useState } from 'react'
import ChatInput from './components/ChatInput';
import ChatWindow from './components/ChatWindow';
// ReactMarkdown- takes the text returned by Gemini and converts Markdown into proper HTML/UI elements.
// import "tailwindcss";

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
        {
          role: "user",
          text: input,
        },
        {
          role: "ai",
          text: data.message,
        },
        ...prev
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
  const clearChat =()=>{
      setMessages([]);
    }
  const handleKeyDown = (e)=>{
    if(e.key==="Enter"){
      connectBackend();
    }
  }
   return(
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white p-6">
      
      <h1 className="text-4xl font-bold mb-2">AI Chat Assistant</h1>
      <ChatInput input={input} setInput={setInput} handleKeyDown={handleKeyDown} connectBackend={connectBackend} clearChat={clearChat} loading={loading} />
      <ChatWindow messages={messages} />
    </div>
    

    
    </>
    
   )
}

export default App
