import { motion } from "framer-motion";

const snowflakes = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  size: Math.random() * 20 + 10,
  x: Math.random() * 100,
  duration: Math.random() * 5 + 8,
  delay: Math.random() * 5,
}));

export const FloatingSnowflakes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute"
          style={{
            left: `${flake.x}%`,
            top: "-5%",
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(flake.id) * 50, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            width={flake.size}
            height={flake.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-20"
          >
            <path
              d="M12 2L12 22M12 2L8 6M12 2L16 6M12 22L8 18M12 22L16 18M2 12L22 12M2 12L6 8M2 12L6 16M22 12L18 8M22 12L18 16M6.34 6.34L17.66 17.66M6.34 6.34L4 8M6.34 6.34L8 4M17.66 17.66L16 20M17.66 17.66L20 16M6.34 17.66L17.66 6.34M6.34 17.66L4 16M6.34 17.66L8 20M17.66 6.34L20 8M17.66 6.34L16 4"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
