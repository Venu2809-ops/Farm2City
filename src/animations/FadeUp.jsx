import { motion } from "framer-motion";

const FadeUp = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;