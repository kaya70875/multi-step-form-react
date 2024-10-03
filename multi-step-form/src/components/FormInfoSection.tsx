import './_FormInfoSection.scss'
import { motion } from 'framer-motion';

interface FormInfoSectionProps {
  formHeader: string;
  formInfo: string;
  children: React.ReactNode;
}

const pageVariants = {
  initial: { opacity: 0, y: 50, scale: 0.9 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 12,
      duration: 0.5
    } 
  },
  exit: { 
    opacity: 0, 
    y: -50, 
    scale: 0.95,
    transition: { 
      ease: "anticipate", 
      duration: 0.3 
    } 
  }
};

export default function FormInfoSection({ formHeader, formInfo, children }: FormInfoSectionProps) {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className='form-info-section'
    >
      <header className='form-header'>
        <h2>{formHeader}</h2>
        <p>{formInfo}</p>
      </header>
      {children}
    </motion.div>
  );
}
