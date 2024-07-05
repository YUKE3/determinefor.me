import { config } from "dotenv";
import { OpenAI } from "openai";
import fs from "fs";

config();

var watermelon;
const img = fs.readFileSync("watermelon.jpg");
watermelon = "data:image/jpeg;base64," + Buffer.from(img).toString("base64");

const openai = new OpenAI({
    apiKey: process.env.API_KEY,
});

const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
        {
            role: "user",
            content: [
                {
                    type: "text",
                    text: "This image contains a few items circled in red with corresponding numbers. Could you pick the best item and give me the number",
                },
                {
                    type: "image_url",
                    image_url: {
                        url: watermelon,
                        detail: "low",
                    },
                },
            ],
        },
    ],
});

console.log(response);
console.log(response.choices[0]?.message?.content);

console.log("Done running.");
