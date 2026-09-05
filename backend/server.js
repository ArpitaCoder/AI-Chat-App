const express = require("express");
const cors = require("cors");
require("dotenv").config();

const {GoogleGenAI} = require("@google/genai")

const app = express();
const PORT = process.env.PORT;

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
})

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello this is backend");
})

app.post("/api/chat/",async(req,res)=>{
    // console.log(req.body.message);
    try{
        const geminiHistory=(req.body.history || []).map((msg)=>({
            role: msg.role === "ai"? "model":"user",
            parts: [{ text: msg.text }]
        }))
        geminiHistory.push({
            role:"user",
            parts:[{text: req.body.message}]
        })

        const response = await ai.models.generateContent({
            model: "gemini-3.6-flash",
            contents: geminiHistory
        })

        res.json({
        message: response.text
    })

    }catch(err){
        console.log(err.message);
        res.status(500).json({
            message:"Something went wrong"
        })
    }
})

app.listen(PORT,()=>{
    console.log(`Server is working on ${PORT}`)
})