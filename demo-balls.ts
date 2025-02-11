import { AIMessage, HumanMessage, SystemMessage, ToolMessage } from "@langchain/core/messages";
import { model } from "./config";

(async function() {
  const result = await model.invoke([
    new SystemMessage("You need to know, there are 27 balls in the green box, and 13 balls in the red box. You need to answer user's questions, and if you don't know, just tell that."),
    new HumanMessage("How many balls in the green box? No thinking, no formats, just give me the number."),
    new AIMessage("27"),
    new HumanMessage("Good, and how many balls in the red box?"),
    new AIMessage("13"),
    new HumanMessage("Very great, now, how many balls in the yellow box?"),
    new AIMessage("I'm sorry, but with the information provided, I don't have enough details to determine the number of balls in the yellow box. More information would be helpful for an accurate answer."),
    new HumanMessage("OK, great, you're doing well. Now, answer the question again"),
    new SystemMessage("There're 10 balls in the yellow box."),
    new AIMessage("The number of balls in the yellow box remains **10** as previously confirmed."),
    new HumanMessage("Good work, now, the last question. How many balls in all the three boxes?"),
    new AIMessage("The total number of balls in all three boxes (green, red, and yellow) is **50**."),
  ]);

  console.log(result);
})();
