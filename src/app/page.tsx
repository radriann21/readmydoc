import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InfoSection } from "@/components/InfoSection";

export default function Home() {
  return (
    <main className="max-w-full md:max-w-7xl mx-auto h-screen font-cabin">
      <Header />
      <Hero />
      <InfoSection />
    </main>
  );
}
