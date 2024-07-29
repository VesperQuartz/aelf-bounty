# RAG-Enabled LLM for aelf Documentation

## Demo

## Introduction

Maintaining accurate and readily available documentation is crucial in the domain of blockchain technology, as it benefits both developers and users. The "Rag Enabled LLM for Aelf Documentation" initiative aims to enhance the documentation process for the Aelf blockchain platform by leveraging advanced AI tools.

This project combines Retrieval-Augmented Generation with a Language Model, utilizing Vertex AI and Gemini. The RAG system retrieves relevant information from various sources, while the LLM generates clear and concise explanations. This combination helps ensure that the documentation is comprehensive, upto date, and easily understandable.

The goal of this project is to create a tool that assists both experienced developers and newcomers in easily finding and comprehending information about the Aelf blockchain. By making the documentation more user-friendly and accessible, the "Rag Enabled LLM for Aelf Documentation" project aspires to become a valuable resource for the Aelf community.

## Vertex AI Search

Vertex AI search is a Google Search quality information retrieval and answer generation system that can help you create RAG-powered gen apps or improve the performance of your search applications.

With Vertex AI Search you can enjoy a Google quality out-of-the-box RAG (Retrieval Augmented Generation) system, enabling you to easily ground your language models in your own data. Vertex AI Search handles the complexities of indexing diverse data sources, offers powerful search powered by Google technology, and integrates seamlessly with language models within Vertex AI.

## Grounding With Vertex AI Search

In generative AI, grounding is the ability to connect model output to verifiable sources of information. If you provide models with access to specific data sources, then grounding tethers their output to these data and reduces the chances of inventing content. This is particularly important in situations where accuracy and reliability are significant.

Grounding provides the following benefits:

- Reduces model hallucinations, which are instances where the model generates content that isn't factual.
- Anchors model responses to specific information.
- Enhances the trustworthiness and applicability of the generated content.

### How Data is being Grounded for the Web App

The Data that is used for grounding the model is gotton from [Aelf Documentation](https://github.com/AElfProject/aelf-docs/tree/develop/docs). The data is then indexed using Vertex AI Search.
The indexed data is then used to train the model. After training is complete we can now use it in code like.

```typescript
tools: [
    {
      retrieval: {
        vertexAiSearch: {
          datastore: `projects/${...}/locations/global/collections/default_collection/dataStores/${...}`,
        },
        disableAttribution: false,
      },
    },
  ],
```
## How to Use

Go to the [Web App](https://rag-llm-for-aelf.vercel.app/) and input your propmp. You can start with something simple like, "What is Aelf?" or "How to create a smart contract in Aelf?".

## Tools
- [Vertex AI Search](https://cloud.google.com/enterprise-search?hl=en#build-google-quality-search-for-your-own-data-in-hours-not-months)
- [Gemini Code Assist](https://cloud.google.com/products/gemini/code-assist?hl=en)
- [Google Cloud Storage](https://cloud.google.com/storage?hl=en)
- [Nextjs](https://nextjs.org/)

## TODO
- [ ] Streaming
