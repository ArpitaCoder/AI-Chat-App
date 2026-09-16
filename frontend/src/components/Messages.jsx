// import React from 'react'
import ReactMarkdown from "react-markdown";

function Messages({msg}){
  return (
    <div className="text-left border-2 rounded-xl p-3 my-2">
      <strong>{msg.role}:</strong> <ReactMarkdown>{msg.text}</ReactMarkdown>
    </div>
  )
}

export default Messages 

