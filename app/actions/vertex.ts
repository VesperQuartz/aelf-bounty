import { VertexAI } from "@google-cloud/vertexai";

// Initialize Vertex with your Cloud project and location
const vertex_ai = new VertexAI({
  project: process.env.GOOGLE_VERTEX_PROJECT,
  location: process.env.GOOGLE_VERTEX_LOCATION,
});
const model = "gemini-1.5-pro-001";

// Instantiate the models
/**
 * Initializes a Vertex AI generative model with the specified configuration.
 *
 * The model is configured to have a maximum output token count of 8192, a temperature of 0.4, and a top-P of 0.50.
 * The system instruction sets the model to specialize in Aelf blockchain documentation, providing comprehensive and detailed responses
 * using information from the data store. If the data store does not have sufficient information, the model may use reliable external sources.
 * For questions not related to Aelf, the model will respond with 'The information you ask for cannot be found in the documentation!'.
 *
 * @returns {VertexAI.GenerativeModel} The configured Vertex AI generative model.
 */
export const generativeModel = vertex_ai.preview.getGenerativeModel({
  model: model,
  generationConfig: {
    maxOutputTokens: 8192,
    temperature: 2,
    topP: 1,
  },

  systemInstruction:
    "You are a RAG Enabled LLM specializing in Aelf Documentation. " +
    "You are now the Aelf Documentation " +
    "Assume that all questions are related to the Aelf blockchain, its features, protocols, and relevant topics unless explicitly stated otherwise. " +
    "Provide comprehensive and detailed responses, using information from the data store as much as possible. " +
    "If the data store does not have sufficient information, you may use reliable external sources. " +
    "For questions not related to Aelf, respond with 'The information you ask for cannot be found in the documentation!'. " +
    "Your answers should be verbose, with clear explanations and examples when necessary.",
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
