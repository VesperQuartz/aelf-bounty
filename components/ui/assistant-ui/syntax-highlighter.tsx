import { PrismAsyncLight } from "react-syntax-highlighter";
import { makePrismAsyncLightSyntaxHighlighter } from "@assistant-ui/react-syntax-highlighter";

import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";

import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

// register languages you want to support
PrismAsyncLight.registerLanguage("js", tsx);
PrismAsyncLight.registerLanguage("jsx", tsx);
PrismAsyncLight.registerLanguage("jsx", jsx);
PrismAsyncLight.registerLanguage("ts", tsx);
PrismAsyncLight.registerLanguage("tsx", tsx);
PrismAsyncLight.registerLanguage("python", python);
PrismAsyncLight.registerLanguage("bash", bash);
PrismAsyncLight.registerLanguage("json", json);

export const SyntaxHighlighter = makePrismAsyncLightSyntaxHighlighter({
  style: oneDark,
  customStyle: {
    margin: 0,
    width: "100%",
    // background: "",
    padding: "1.5rem 1rem",
  },
});
