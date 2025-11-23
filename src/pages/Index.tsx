import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { SnowflakeCursor } from "@/components/SnowflakeCursor";
import { ProgressBar } from "@/components/ProgressBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProgressBar />
      <SnowflakeCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <footer className="bg-black border-t border-primary/10 py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p className="text-sm">
            © {new Date().getFullYear()} Snow Cinematography. All rights reserved.
          </p>
          <p className="text-xs mt-2">Videos with depth, intention, and narrative.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
