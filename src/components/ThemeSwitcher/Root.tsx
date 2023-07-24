import { motion } from 'framer-motion';

type RootProps = {
  children: React.ReactNode;
};

export default function Root({ children }: RootProps) {
  return (
    <motion.label
      className="flex flex-row justify-center items-center h-10 w-10 rounded-full bg-amber-300 cursor-pointer mt-5 mr-6"
      htmlFor="checkbox"
      whileHover={{ scale: 1.15 }}
    >
      {children}
    </motion.label>
  );
}
