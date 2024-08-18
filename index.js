import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const chatHistory = []; // Store conversation history

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", async (req, res) => {
  const userInput = req.body.userInput;

  // Start a chat session and send the message
  const chatSession = model.startChat({
    history: chatHistory,
  });
  const result = await chatSession.sendMessage(userInput);
  const botResponse = result.response.text();

  // Add responses to the history
  chatHistory.push({ role: "user", parts: [{ text: userInput }] });
  chatHistory.push({ role: "model", parts: [{ text: botResponse }] });

  // Render the bot response in the view
  res.json({ botResponse: botResponse });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
