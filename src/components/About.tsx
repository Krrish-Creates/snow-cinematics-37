import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-dark-bg to-background" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="font-heading text-4xl md:text-6xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About <span className="text-primary">Snow</span>
          </motion.h2>
          
          <motion.div
            className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              Snow is a <span className="text-primary font-semibold">cinematographer</span> who brings stories to life through the lens. 
              With expertise in both <span className="text-foreground font-medium">videography and editing</span>, every frame is crafted 
              with depth, intention, and narrative precision.
            </p>
            
            <p>
              Serving <span className="text-foreground font-medium">GTA and Canada</span> for on-location videography shoots, 
              Snow specializes in music videos, brand content, and influencer collaborations that demand cinematic excellence.
            </p>
            
            <p>
              For clients worldwide, Snow offers premium <span className="text-foreground font-medium">video editing services</span> — 
              transforming raw footage into polished, impactful stories that resonate with audiences.
            </p>

            <p className="text-center pt-6">
              <span className="text-primary text-2xl font-bold">—</span>
            </p>
            
            <p className="text-center italic text-primary/80">
              "Every project is an opportunity to create something extraordinary."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
