import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const SnowflakeCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-50 hidden md:block"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-60"
      >
        <path
          d="M12 2L12 22M12 2L8 6M12 2L16 6M12 22L8 18M12 22L16 18M2 12L22 12M2 12L6 8M2 12L6 16M22 12L18 8M22 12L18 16M6.34 6.34L17.66 17.66M6.34 6.34L4 8M6.34 6.34L8 4M17.66 17.66L16 20M17.66 17.66L20 16M6.34 17.66L17.66 6.34M6.34 17.66L4 16M6.34 17.66L8 20M17.66 6.34L20 8M17.66 6.34L16 4"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary"
        />
      </svg>
    </motion.div>
  );
};
