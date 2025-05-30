import { motion } from 'framer-motion';
import { Download, Code, Server, Database } from 'lucide-react';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center relative bg-white dark:bg-gray-900"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(67,56,202,0.1),rgba(255,255,255,1))] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(67,56,202,0.1),rgba(17,24,39,1))]" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-4 mb-8"
        >
          <Code className="w-8 h-8 text-purple-400" />
          <Server className="w-8 h-8 text-blue-400" />
          <Database className="w-8 h-8 text-indigo-400" />
        </motion.div>
        <motion.h1 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
        >
          Avantika Srivastava
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
        >
          Frontend & MERN Stack Developer
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Crafting exceptional digital experiences with modern web technologies.
          Specialized in building scalable applications with React, Node.js, and the MERN stack.
        </motion.p>
        <a href="/src/data/resume.pdf" download="/src/data/AVANTIKA.pdf">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto hover:from-purple-600 hover:to-blue-600 transition-all"
  >
    <Download size={20} />
    Download Resume
  </motion.button>
</a>

      </div>
    </motion.section>
  );
}
