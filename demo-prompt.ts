import { PromptTemplate } from "@langchain/core/prompts";
import { model } from "./config.ts";

(async function() {
  const promptTemplate = PromptTemplate.fromTemplate(`
    Please answer the question in alien style

    {question}
  `);

  const prompt = await promptTemplate.invoke({
    question: "你是谁？",
  });

  const response = await model.invoke(prompt);

  console.log(response.content);
})();
