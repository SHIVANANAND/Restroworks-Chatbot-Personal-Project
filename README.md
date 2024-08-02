# Restroworks Chatbot

Welcome to the Restroworks Chatbot project! This chatbot is designed to provide information about Restroworks services and assist users with their queries.

## Project Overview

This project is a web-based chatbot built using Flask and deployed on Vercel. It utilizes the Google Generative AI API to handle user queries and provide responses. The chatbot interface is created using HTML, CSS, and JavaScript.

## Features

- **User-Friendly Interface:** Easy-to-use chat interface for interacting with the chatbot.
- **AI-Powered Responses:** Utilizes Google Generative AI for intelligent responses.

## Technologies Used

- **Flask:** Backend framework for handling server-side logic.
- **requests:** For making HTTP requests to the Google Generative AI API.
- **python-dotenv:** For managing environment variables.
- **google-generativeai:** For AI-powered responses.

## Installation and Setup

Follow these steps to get the project up and running locally:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/restroworks-chatbot.git
    cd restroworks-chatbot
    ```

2. **Create and activate a virtual environment:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install the required packages:**
    ```bash
    pip install -r requirements.txt
    ```

4. **Set up environment variables:**
    Create a `.env` file in the root directory and add your Google Generative AI API key:
    ```env
    GOOGLE_GENERATIVEAI_API_KEY=your_api_key_here
    ```

5. **Run the application:**
    ```bash
    flask run
    ```

6. **Open your browser and navigate to:**
    ```text
    http://127.0.0.1:5000
    ```

## Deployment on Vercel

The project is deployed on Vercel. You can visit the live application [here](https://restroworks-chatbot.vercel.app/).


## Usage

Type your queries into the chat interface and press enter. The chatbot will respond with relevant information about Restroworks services.

## Contributing

Contributions are welcome! Please create a pull request or open an issue to discuss your ideas or improvements.
