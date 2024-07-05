import { config } from "dotenv";
import { OpenAI } from "openai";

config();

console.log(process.env.API_KEY);

const openai = new OpenAI({
    apiKey: process.env.API_KEY,
});

const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello!  " }],
});

console.log(response);
console.log(response.choices[0]?.message?.content);

console.log("Done running.");
