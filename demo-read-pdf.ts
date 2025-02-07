import { PromptTemplate } from "@langchain/core/prompts";
import { model } from "./config.ts";
import { readPDF } from "./utils.ts";

(async function() {
  const promptTemplate = PromptTemplate.fromTemplate(`
    context: {context}

    please answer the question: {question}
  `);

  const docs = await readPDF("data/sample.pdf");

  const prompt = await promptTemplate.invoke({
    question: "What's in context?",
    context: docs,
  });

  const response = await model.invoke(prompt);

  console.log(response.content);
})();
