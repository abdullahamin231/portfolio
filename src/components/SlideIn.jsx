import { motion } from "framer-motion";
import "../App.css";
import { useInView } from "react-intersection-observer";

export default function SlideIn({ children }) {
  const { ref, inView, entry } = useInView();

  const textLength = children.toString().length;
  const rectDuration =
    0.8 + Math.round(Math.random() * textLength) / textLength;

  return (
    <motion.div ref={ref} className="relative overflow-hidden">
      <motion.div
        className="bg-primary h-full w-full"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
        initial="hidden"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          hidden: { x: 0 },
          animate: { x: 1000 },
        }}
        transition={{ duration: rectDuration, ease: "easeInOut" }}
        onAnimationEnd={{ opacity: 0 }}
      />
      <motion.div
        style={{
          position: "relative",
          zIndex: 2,
        }}
        initial={{ y: 270 }}
        animate={{ y: inView ? 0 : 270 }}
        transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
