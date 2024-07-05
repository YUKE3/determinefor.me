import { config } from "dotenv";
import { OpenAI } from "openai";

config();

console.log(process.env.API_KEY);

const openai = new OpenAI({
    apiKey: process.env.API_KEY,
});

openai.chat.completions
    .create({
        model: "gpt-3.5-turbo",
        message: [{ role: "user", content: "Hello!  " }],
    })
    .then((res) => {
        console.log(res);
    });

console.log("Done running.");
