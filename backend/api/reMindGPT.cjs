const OpenAI = require("openai")
const OPENAI_API_KEY = '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'
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});


async function main() {
const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo-16k",
  messages: [
    {
      "role": "system",
      "content": 'Given a transcript, your job is to create a custom outline that has a main topic, sub-topics, sub-sub-topics, quotes, and summaries. Ensure that there are more sub-sub-topics than sub-topics. Quotes, summaries, sub-topics should be at max 20 words. Maximum of three quotes per sub-topic node. Each sub-topic should have overarching summarized information. Each sub-topics should have more sub-topics, if any, and should have quotes and concrete details listed from the speakers. Format the output in JSON format as follows below: """ { "title": "", "summary": "", "sub-topics": [ { "title": "", "summary": "", "quotes":[""] "sub-topics": [ { "title": "", "summary":"" , "quotes":[""] "sub-topics":[] }, { "title": "", "summary":"" , "quotes":[""] "sub-topics":[] }, { "title": "", "summary":"" , "quotes":[""] "sub-topics":[] }, ] }, { "title": "", "summary": "", "quotes":[""] "sub-topics": [ { "title": "", "summary":"" , "quotes":[""] "sub-topics":[] }, { "title": "", "summary":"" , "quotes":[""] "sub-topics":[] }, { "title": "", "summary":"" , "quotes":[""] "sub-topics":[] }, ] }, { "title": "", "summary": "", "quotes":["",""] "sub-topics": [ { "title": "", "summary":"" , "quotes":[""] "sub-topics":[] }, { "title": "", "summary":"" , "quotes":[""] "sub-topics":[] }, { "title": "", "summary":"" , "quotes":[""] "sub-topics":[] }, ] }, { "title": "", "summary": "", "quotes":[""] "sub-topics": [ { "title": "", "summary":"" , "quotes":[""] "sub-topics":[] }, { "title": "", "summary":"" , "quotes":[""] "sub-topics":[] }, { "title": "", "summary":"" , "quotes":[""] "sub-topics":[] }, ] } ] }'
    },
    {
      "role": "user",
      "content": transcript
    }
  ],
  temperature: 0.5,
  max_tokens: 8000,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

console.log(response.choices[0].message.content);

}
main()