async function y(req, res, model, chatHistory) {
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
}


export default y;