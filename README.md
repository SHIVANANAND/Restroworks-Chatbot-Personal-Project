# Restroworks Chatbot

This project is a full-stack application created to demonstrate my skills in building and deploying a chatbot using Node.js, Express, and EJS, integrated with Google Generative AI. The chatbot is designed to provide information about Restroworks and how their solutions can help businesses in the restaurant industry.

## Project Overview

### Features
- **Chatbot Integration**: Utilizes Google Generative AI to power the chatbot, providing detailed and accurate responses related to Restroworks' offerings.
- **User Interaction**: The chatbot engages users by understanding their business needs and suggesting relevant solutions.
- **EJS Templating**: The frontend is rendered using EJS, allowing for dynamic content based on user interactions.
- **Express Server**: The backend is built with Express, handling routing, API requests, and serving static files.

### Technologies Used
- **Node.js**: Backend runtime environment.
- **Express**: Web framework for Node.js.
- **EJS**: Embedded JavaScript templating.
- **Google Generative AI**: Provides the intelligence behind the chatbot.
- **Render**: Hosting platform for the deployed application.
- **Vercel (optional)**: Initial deployment attempt before switching to Render.

## Project Structure
```
.
├── public
│   ├── assets
│   │   ├── behavior.js
│   │   ├── style.css
│   │   └── webpageStyle.css
│   └── views
│       ├── index.ejs
│       └── webpage.ejs
├── .env
├── .gitignore
├── imports-and-load-chatbot-model.js
├── index.js
├── package.json
├── post-request-for-chat-bot.js
└── README.md
```

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/restroworks-chatbot.git
   ```

2. **Install dependencies**:
   ```bash
   cd restroworks-chatbot
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add your Google Generative AI API key:
     ```
     GEMINI_API_KEY=your_google_api_key_here
     ```

4. **Run the application**:
   ```bash
   npm start
   ```
   The application will run on `http://localhost:3000`.

5. **Access the chatbot**:
   - Visit `http://localhost:3000` to interact with the chatbot.

## Deployment

This project is deployed on Render and can be accessed at the following link:

[https://restroworks-chatbot.onrender.com](https://restroworks-chatbot.onrender.com)

## Purpose

This project was created to showcase my full-stack development skills to the Restroworks team. It demonstrates my ability to integrate third-party AI services, build dynamic web applications, and deploy complex projects on cloud platforms.
