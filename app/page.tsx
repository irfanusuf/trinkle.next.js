import Community from "@/components/home/Community";
import Features from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Community />
      <Footer />
    </main>
  )
}
