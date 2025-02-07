import { ChatOllama, OllamaEmbeddings, } from "@langchain/ollama";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { Chroma } from "@langchain/community/vectorstores/chroma";

const model = new ChatOllama({
  model: "llama3.2",
});

const embeddings = new OllamaEmbeddings({
  model: "nomic-embed-text",
});

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000, chunkOverlap: 200,
});

// docker pull chromadb/chroma
// docker run -p 8957:8000 -d chromadb/chroma
const store = new Chroma(embeddings, {
  collectionName: "test-collection",
  url: "http://localhost:8957",
});

export {
  model,
  embeddings,
  splitter,
  store,
}
