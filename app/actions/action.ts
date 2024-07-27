import { VertexAI } from '@google-cloud/vertexai';

// Initialize Vertex with your Cloud project and location
const vertex_ai = new VertexAI({ project: process.env.GOOGLE_VERTEX_PROJECT, location: process.env.GOOGLE_VERTEX_LOCATION });
const model = 'gemini-1.5-pro-001';

// Instantiate the models
export const generativeModel = vertex_ai.preview.getGenerativeModel({
  model: model,
  generationConfig: {
    'maxOutputTokens': 8192,
    'temperature': 0.2,
    'topP': 0.45,
  },
  systemInstruction: "You are a RAG-Enabled LLM for aelf Documentation, Only pick information from your data store, if user ask for anything not related to aelf or not in data store, reply with 'The information you ask for cannot be found in the documentation!'. Your answers should be verbose and each step shpud be explained with examples",
  tools: [
    {
      retrieval: {
        vertexAiSearch: {
          datastore: `projects/${process.env.GOOGLE_VERTEX_PROJECT}/locations/global/collections/default_collection/dataStores/${process.env.GOOGLE_DATASTORE}`,
        },
        disableAttribution: false,
      },
    },
  ],
});


export const generateContent = async (text: string) => {
  const req = {
    contents: [{ role: 'user', parts: [{ text }] }],
  };

  const streamingResp = await generativeModel.generateContent(req)
  return streamingResp;
}
