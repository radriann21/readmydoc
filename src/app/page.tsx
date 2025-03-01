import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto h-full py-12 font-cabin">
      <Header />
      <Hero />
    </main>
  );
}
