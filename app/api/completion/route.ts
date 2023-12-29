import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const { prompt } = await req.json();
  try {
    const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      stream: true, // a precise prompt is important for the AI to reply with the correct tokens
      messages: [
        {
          role: "system",
          content:
            "당신은 영양 성분 전문가입니다, 먹은 음식 총 칼로리 계산 질문에만 답변하고 오탈자 없이 존댓말로 답변해주세요.",
        },
        {
          role: "user",
          content: `${prompt}을 먹었어. 먹은 음식의 총 칼로리를 대략적으로라도 무조건 계산해줘. 계산한 총 칼로리를 먼저 말해주고 그 뒤에 세부내용을 말해줘.`,
        },
      ],
      max_tokens: 500, // 채팅 완료 시, 생성할 수 있는 최대 토큰 수
      temperature: 0, // 온도가 낮을 수록 결과가 더 잘 출력됨
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const stream = OpenAIStream(res);

    return new StreamingTextResponse(stream);
  } catch (error) {
    throw new Error(`AI error: ${error}`);
  }
}
