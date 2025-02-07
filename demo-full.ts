import { PromptTemplate } from "@langchain/core/prompts";
import { store, model, } from "./config.ts";

(async function() {
  const question = "What had the author done to make money?";

  const context = await store.similaritySearch(question);
  console.log("================ context ================")
  console.log(context.map(d => d.pageContent).join("\n--\n"));

  console.log("================ prompt template ================")
  const promptTemplate = PromptTemplate.fromTemplate(`
    context: {context}

    please answer the question: {question}
  `);
  const prompt = await promptTemplate.invoke({
    question,
    context,
  });
  console.log(promptTemplate.template);

  const response = await model.invoke(prompt);

  console.log("================ response ================")
  console.log(response.content);
})();
