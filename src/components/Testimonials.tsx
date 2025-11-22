import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    id: 1,
    name: "Marcus Chen",
    role: "Fitness Influencer",
    content: "Snow transformed my brand with cinematic visuals that elevated my content to a whole new level. The attention to detail and storytelling is unmatched.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Brand Director, TechFlow",
    content: "Working with Snow was seamless from start to finish. The editing work was phenomenal — every frame perfectly captured our brand's essence.",
  },
  {
    id: 3,
    name: "Jordan Martinez",
    role: "Music Artist",
    content: "The music video Snow shot for me exceeded all expectations. It's not just a video — it's a visual masterpiece that tells my story perfectly.",
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            What people are saying about working with Snow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                <CardContent className="pt-8 space-y-4">
                  <Quote className="w-10 h-10 text-primary/30" />
                  <p className="text-muted-foreground leading-relaxed">
                    {testimonial.content}
                  </p>
                  <div className="pt-4 border-t border-border/50">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
