import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-6">
            <a href="https://github.com/avantika2195" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/avantika-srivastava-23a34a221/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/Avantik55555681" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {currentYear} Avantika Srivastava. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}