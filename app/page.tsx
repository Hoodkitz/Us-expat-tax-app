import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Disclaimer from '@/components/Disclaimer';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-4xl px-4 pb-8">
        <Disclaimer prominent />
      </div>
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
