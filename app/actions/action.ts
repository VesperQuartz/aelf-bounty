"use server";
import { generativeModel } from "./vertex";

/**
 * Generates content using a generative model.
 *
 * @param text - The input text to be used for content generation.
 * @returns The generated content response.
 */
export const generateContent = async (text: string) => {
  const req = {
    contents: [{ role: "user", parts: [{ text }] }],
  };
  try {
    const streamingResp = await generativeModel.generateContent(req);
    return streamingResp.response;
  } catch (error) {
    console.error(error)
  }
};
