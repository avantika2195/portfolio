import { motion } from 'framer-motion';
import { Code2, Database, Globe, Users } from 'lucide-react';


export default function About() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-50" />
              <img
                src="/src/components/self.jpg"
                alt="Avantika Srivastava"
                className="w-full h-full object-cover rounded-full relative z-10"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate MERN Stack and Frontend Developer with a keen eye for creating intuitive user interfaces
                and scalable web applications. With expertise in modern JavaScript frameworks and full-stack development,
                I bring ideas to life through clean, efficient code.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <Code2 className="text-purple-400" size={20} />
                  <span>Frontend Specialist</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Database className="text-blue-400" size={20} />
                  <span>MERN Stack Expert</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Globe className="text-indigo-400" size={20} />
                  <span>Responsive Design</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Users className="text-violet-400" size={20} />
                  <span>Team Collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}