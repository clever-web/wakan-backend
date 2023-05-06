import { PineconeClient } from "@pinecone-database/pinecone";
import { callVectorDBQAChain } from "../lib/vectorstoreutils";

const pinecone = new PineconeClient();

export const getWakandaAIResponse = async (
  character: string,
  question: string
) => {
  try {
    //initialize the vectorstore to store embeddings
    await pinecone.init({
      environment: `${process.env.PINECONE_ENVIRONMENT}`,
      apiKey: `${process.env.PINECONE_API_KEY}`,
    });

    // retrieve API operations for index created in pinecone dashboard
    const index = pinecone.Index("wakanda");

    // crosscheck your index (that contains embeddings of your docs) exists in the vectorstore
    const indexData = await index.describeIndexStats({
      describeIndexStatsRequest: {},
    });

    const prompt =
      "You are a human and I am feeding you a movie script. I will ask you a question and you have to answer it as a human character from the script, Use words such as I in the answer and make your answer at least 50 tokens. The character and question are given here.\n";

    const query = prompt + character + question;
    const namespace = "test"; //change this to your own vectorbase namespace

    const response = await callVectorDBQAChain(query, index, namespace);
    return response;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
