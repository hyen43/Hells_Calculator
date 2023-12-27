import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const { prompt } = await req.json();
  console.log("propmpt", prompt);

  const res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    stream: true, // a precise prompt is important for the AI to reply with the correct tokens
    messages: [
      {
        role: "user",
        content: `${prompt}을 먹었어. 먹은 음식의 총 칼로리를 대략적으로라도 무조건 계산해줘.`,
      },
    ],
    max_tokens: 500, // 채팅 완료 시, 생성할 수 있는 최대 토큰 수
    temperature: 0, // 온도가 낮을 수록 결과가 더 잘 출력됨
    frequency_penalty: 2,
    presence_penalty: 2,
  });

  const stream = OpenAIStream(res);
  return new StreamingTextResponse(stream);
}
