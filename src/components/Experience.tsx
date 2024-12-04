import { motion } from 'framer-motion';
import { experiences } from '../data/resume';

export default function Experience() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 border-l border-blue-500 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-3 h-3 bg-blue-500 rounded-full -translate-x-[7px]" />
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-blue-400 mb-2">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}