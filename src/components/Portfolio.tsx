import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";

const portfolioItems = [
  {
    id: 1,
    title: "Showreel 2024",
    category: "Compilation",
    thumbnail: "https://img.youtube.com/vi/-Y7i54yzYMA/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/-Y7i54yzYMA",
  },
  {
    id: 2,
    title: "Cinematic Visual",
    category: "Music Video",
    thumbnail: "https://img.youtube.com/vi/Y7oAxctrXOs/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/Y7oAxctrXOs",
  },
  {
    id: 3,
    title: "Explainer Video",
    category: "Corporate",
    thumbnail: "https://img.youtube.com/vi/kDkNC-VqaoY/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/kDkNC-VqaoY",
  },
];

export const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-darker-bg to-background" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Featured <span className="text-primary">Work</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of cinematic storytelling and visual excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative aspect-video rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedVideo(item.videoUrl)}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-primary text-sm">{item.category}</p>
                </div>
              </div>

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300 rounded-lg pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black border-primary/20">
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          {selectedVideo && (
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src={selectedVideo}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
