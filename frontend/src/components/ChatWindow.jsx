// import React from 'react'

import Messages from "./Messages"

function ChatWindow({messages}) {
  return (
   <>
   <div className="w-1/2 my-6">
      {messages.map((msg,index)=>(
        <Messages key={index} msg={msg} />
      ))}
    </div>
   </>
  )
}

export default ChatWindow
