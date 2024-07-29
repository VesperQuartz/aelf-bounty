import { Thread } from "@/components/ui/assistant-ui/thread";

/**
 * Renders the main page of the application, which includes the `Thread` component.
 *
 * @returns {JSX.Element} The main page component.
 */
export default function Home() {
  return (
    <main className="h-full">
      <Thread />
    </main>
  );
}
