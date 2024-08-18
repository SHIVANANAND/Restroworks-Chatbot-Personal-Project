import bodyParser from "body-parser";
import express from "express";
import loadChatbotModel from "./imports-and-load-chatbot-model.js";
import handleChatRequest from "./post-request-for-chat-bot.js";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const { model, chatHistory } = loadChatbotModel();

app.get("/", function(req, res) {
    res.render("index");
})

app.post("/", (req, res) => handleChatRequest(req, res, model, chatHistory));

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
})