import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 lg:py-10 py-20 px-8">
      <Header />
      <ChatSection />
    </main>
  );
}
