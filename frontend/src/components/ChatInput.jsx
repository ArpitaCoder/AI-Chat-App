// import React from 'react'

function ChatInput({input,setInput,handleKeyDown,connectBackend,loading,clearChat}) {
  return (
    <>
      <input type="text" placeholder='Type your message...' value={input} onChange={(e)=>setInput(e.target.value) } onKeyDown= {handleKeyDown} className="border-2 rounded-xl p-3 w-1/2 outline-none" />
    <div className="flex gap-4 mt-4">
        <button onClick = {connectBackend} disabled={loading} className="cursor-pointer border-2 rounded-xl px-5 py-2 hover:bg-gray-100 hover:text-slate-900" >{loading ?"Thinking... ":"Send"}</button>
        <button onClick={clearChat} className="cursor-pointer border-2 rounded-xl px-5 py-2 hover:bg-gray-100 hover:text-slate-900" >Clear Chat</button>
    </div>
    
    </>
  )
}

export default ChatInput
