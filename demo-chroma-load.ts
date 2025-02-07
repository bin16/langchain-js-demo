import { store } from "./config.ts";

(async function() {
  const allResults = await store.similaritySearch("make money");

  console.log(allResults.map(d => d.pageContent).join("\n----\n"));
})();
