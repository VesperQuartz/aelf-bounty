"use client";

import { AssistantRuntimeProvider, useLocalRuntime } from "@assistant-ui/react";
import { MyModelAdapter } from "./Chat";

/**
 * Provides the runtime context for the Assistant UI components.
 *
 * This component wraps the children with the `AssistantRuntimeProvider`, which
 * makes the runtime available to the Assistant UI components throughout the
 * component tree.
 *
 * @param children - The React nodes to render within the runtime provider.
 */
export function MyRuntimeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const runtime = useLocalRuntime(MyModelAdapter);

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
}
