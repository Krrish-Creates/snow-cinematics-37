import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { FloatingNav } from "./FloatingNav";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-background/90 backdrop-blur-lg border-b border-border/50" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="font-heading text-2xl font-black">
              <span className="text-primary">Snow</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold"
                asChild
              >
                <a href="https://calendly.com/krrishsharma1508/discovery-call" target="_blank" rel="noopener noreferrer">
                  Book Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Floating Nav for Mobile */}
      <div className="md:hidden">
        <FloatingNav />
      </div>
    </>
  );
};
