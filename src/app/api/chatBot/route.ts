import { NextResponse } from "next/server";
const { GoogleGenerativeAI } = require("@google/generative-ai");
export async function POST(req: Request) {
  const body = await req.json();

  console.log(body);
  try {
    const genAI = new GoogleGenerativeAI(
      process.env.NEXT_PUBLIC_GEMINI_API_KEY,
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = body;
    const result = await model.generateContent(prompt);
    const resultAI = result.response.text();
    return NextResponse.json(resultAI);
  } catch (error) {
    console.log(error);
  }
}
