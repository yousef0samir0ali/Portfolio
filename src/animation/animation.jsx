import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
export const AnimatedSection = ({ children }) => {
  return (
    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>
      {children}
    </motion.div>
  );
};
