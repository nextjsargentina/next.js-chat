import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 lg:py-12 py-24 px-6">
      <Header />
      <ChatSection />
    </main>
  );
}
