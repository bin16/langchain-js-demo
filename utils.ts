// https://github.com/langchain-ai/langchainjs/tree/main/libs/langchain-community/src/document_loaders/fs
// csv, docx, epub, pdf, pptx, srt, ...
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { TextLoader } from "langchain/document_loaders/fs/text";

import { splitter, } from "./config.ts";

export const readPDF = async (filename: string, split = false) => {
  const pdf = new PDFLoader(
    filename,
  );

  const docs = await pdf.load();

  if (!split) {
    return docs;
  }

  return await splitter.splitDocuments(docs);
}

export const readText = async (filename: string, split = false) => {
  const txt = new TextLoader(
    filename,
  );

  const docs = await txt.load();

  if (!split) {
    return docs;
  }

  return await splitter.splitDocuments(docs);
}
