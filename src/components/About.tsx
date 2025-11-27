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
            About <span className="text-primary">Me</span>
          </motion.h2>
          
          <motion.div
            className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              Premium brands require more than beautiful footage — they demand <span className="text-primary font-semibold">strategic storytelling that converts</span>. 
              I architect visual narratives that position you as the obvious choice in your market.
            </p>
            
            <p>
              My clients don't chase vanity metrics. They invest in <span className="text-foreground font-medium">cinematic authority</span> — 
              content that commands attention, clarifies positioning, and drives measurable ROI. From <span className="text-foreground font-medium">6-figure launches</span> to 
              <span className="text-primary font-semibold"> multi-million dollar brands</span>, the standard is the same: precision, polish, and performance.
            </p>

            <p>
              Whether on location across <span className="text-foreground font-medium">Canada</span> or collaborating remotely, 
              you get world-class execution and a partner who understands the stakes.
            </p>

            <p className="text-center pt-8">
              <span className="text-primary text-xl font-semibold">Strategy. Cinema. Results.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
