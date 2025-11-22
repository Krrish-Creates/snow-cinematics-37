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
              I don't just shoot videos — I solve problems through <span className="text-primary font-semibold">cinematic storytelling</span>. 
              Every frame I craft is designed with one purpose: to help my clients achieve the results they're after.
            </p>
            
            <p>
              Take Marcus, for example. He was pulling <span className="text-foreground font-medium">millions of views</span> on his content, 
              but his conversion rate was barely breaking 2%. The issue wasn't attention — it was intention. I restructured his videos 
              to focus on <span className="text-foreground font-medium">narrative clarity and emotional hooks</span>. His views dropped to 
              200k–300k per video, but his conversion rate skyrocketed to <span className="text-primary font-semibold">12%</span>. 
              Quality over vanity metrics — every time.
            </p>
            
            <p>
              Then there was Daniel. His message was powerful, but his <span className="text-foreground font-medium">positioning was unclear</span>. 
              Audiences didn't know what he stood for. I worked with him to refine his branding theme, adjusted how he presented himself on camera, 
              and gave his content a <span className="text-foreground font-medium">cohesive visual identity</span>. The result? His audience finally 
              understood his value — and they started converting.
            </p>

            <p>
              Whether it's videography in the <span className="text-foreground font-medium">GTA and across Canada</span>, or editing for clients 
              worldwide, I bring the same approach: <span className="text-primary font-semibold">strategy meets cinema</span>.
            </p>

            <p className="text-center pt-6">
              <span className="text-primary text-2xl font-bold">—</span>
            </p>
            
            <p className="text-center italic text-primary/80">
              "Know thyself." — Socrates
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
