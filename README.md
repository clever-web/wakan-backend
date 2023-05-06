
# Wakanda AI Chat

Wakanda AI Chat is a simple web application that allows users to interact with AI-generated characters using the Black Panther Wakanda Forever script. Users can select a character, ask a question, and receive a response generated by an AI model.The frontend is built using Vue.js, and the backend uses Node.js and Express. Other tools used include Langchain JS, Pinecone DB, and the OpenAI API

Essentially, I formatted the script, created embeddings, and uploaded those embeddings to a Pinecone vector database. When the user asks a question that question is turned into an embedding and then compared to embeddings in the vector database and the most contextually similar embeddings are used as context to answer whatever the user has asked.


## Getting Started

### Prerequisites
Node.js

npm

### Installation
1. Clone the repository

```
git clone https://github.com/gchis66/wakanda-ai-chat.git
```
2. Install the frontend dependencies

```
cd wakanda-ai-chat/frontend
npm install
```
3. Install the backend dependencies
```
cd to the root
npm install
```

### Running the Application

1. Start the backend server
```
cd to the root
npm run Start
```

2. Start the frontend development server
```
cd to /frontend
npm run serve 
```
3. Open your browser and navigate to http://localhost:8080 to interact with the application

