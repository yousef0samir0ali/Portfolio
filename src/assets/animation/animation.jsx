import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react/prop-types
export const AnimatedSection = ({ children }) => {
  const { i18n } = useTranslation();
  // Start offset toward the inline-start side; overflow past the right edge in RTL becomes horizontal scroll
  const dir = i18n.dir(i18n.language);
  const offset = dir === 'rtl' ? 100 : -100;

  return (
    <motion.div
      key={dir}
      initial={{ opacity: 0, x: offset }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
