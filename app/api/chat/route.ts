import { generateContent } from "@/app/actions/action";
import { NextResponse } from "next/server";

type IMessage = {
  messages: Array<{
    id: string;
    role: "assistant" | "user";
    content: Array<{
      type: "text";
      text: string;
    }>;
  }>
  createdAt: string;
}

const getLastMessage = (messages: IMessage) => {
  return messages.messages[messages.messages.length - 1].content[0].text;
}
export async function POST(req: Request) {
  try {

    const input: IMessage = await req.json();
    const text = getLastMessage(input);
    const chat = await generateContent(text);
    return NextResponse.json({ text: chat?.response?.candidates?.[0].content.parts[0].text });
  } catch (e) {
    console.error(e)
    return NextResponse.json({ text: "Something went wrong!" });
  }
}
