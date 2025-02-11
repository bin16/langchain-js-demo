import { AIMessage, HumanMessage, SystemMessage, ToolMessage } from "@langchain/core/messages";
import { model } from "./config";

(async function() {
  const result = await model.invoke([
    new SystemMessage("You are an assistant to help answering user's question. And depends on user's question, there may be a system message to give you some helpful context messages."),
    new HumanMessage("What did you see in the image?"),
    new SystemMessage("image.jpg : There're three boxes in the image. Red, yellow and green. There're 3 balls in the red box, and 5 balls in the green box."),
  ]);

  console.log(result);
})();
