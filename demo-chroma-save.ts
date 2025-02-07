import { readText } from "./utils.ts";
import { store } from "./config.ts";

(async function() {

  const docs = await readText("data/what-i-worked-on.txt", true);

  await store.addDocuments(docs);
})();
