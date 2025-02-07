## Requirements

### Install packages

```sh
npm i
```

### Install Ollama and pull models

```sh
ollama pull llama3.2:latest
ollama pull nomic-embed-text:latest
```

### Install ChromaDB

```sh
docker pull chromadb/chroma
docker run -p 8957:8000 -d chromadb/chroma
# see config.ts line 19
```

## Run demo

```sh
# read text and write to chromadb first
npx tsx ./demo-chroma-save.ts
# search context and answer the question
npx tsx ./demo-full.ts
```

## Files

- data/
  - work-i-worked-on.txt - https://paulgraham.com/worked.html
  - sample.pdf - not included, just place your own pdf file.
- config.ts - models and chromadb configurations
- utils.ts - readText and readPDF function, based on langchain's loaders
- demo-chroma-save.ts - read text from file and write to chromadb
- demo-chroma-load.ts - search content from chromadb
- demo-chrome-prompt.ts - test prompt
- demo-read-pdf.ts - read pdf content as content and answer question
- demo-full.ts - (run demo-chroma-save.ts first), full RAG demo.
