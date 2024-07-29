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
  const input: IMessage = await req.json();
  return NextResponse.json({ input: getLastMessage(input) })
}
