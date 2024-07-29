import { ChatModelAdapter } from "@assistant-ui/react";
import { generateContent } from "./actions/action";

/**
 * Provides a ChatModelAdapter implementation that sends messages to a backend API and returns the generated content.
 *
 * The `run` method of this adapter sends the provided `messages` to the `/api/chat` endpoint using a POST request. It then processes the response from the API and returns the generated content as a single text response.
 *
 * @param messages The messages to send to the backend API.
 * @param abortSignal An AbortSignal that can be used to cancel the request.
 * @returns An object containing the generated content.
 */
export const MyModelAdapter: ChatModelAdapter = {
  async run({ messages, abortSignal }) {
    const result = (await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // forward the messages in the chat to the API
      body: JSON.stringify({
        messages,
      }),
      // if the user hits the "cancel" button or escape keyboard key, cancel the request
      signal: abortSignal,
    })) as any;

    const data = await result.json();
    const outputStream = await generateContent(data.input);

    let text = "";
    if (outputStream) {
      text = outputStream.candidates?.[0].content.parts[0].text!;
    } else {
      text = "No response from the model";
    }
    console.log(text);
    return {
      content: [
        {
          type: "text",
          text: text || "",
        },
      ],
    };

    // for await (const chunk of outputStream) {
    //   // text += chunk.candidates?.[0].content.parts[0].text;
    //   yield {
    //     content: [
    //       {
    //         type: "text",
    //         text: text || "",
    //       },
    //     ],
    //   };
    // }
  },
};
