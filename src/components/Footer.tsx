import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand & Description */}
            <div className="md:col-span-1">
              <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                Sahana Pujar
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                AI & ML student passionate about creating innovative solutions that bridge 
                technology and real-world impact. Always eager to learn and collaborate.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/pujar-sahana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-200 hover-lift"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/Sana-124/python-code.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-200 hover-lift"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=pujarsahana1718@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-200 hover-lift"
                  title="Send Gmail"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/80 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-white/60 text-sm">Email</div>
                  <a
                    href="mailto:pujarsahana1718@gmail.com"
                    className="text-white hover:text-accent transition-colors duration-200"
                  >
                    pujarsahana1718@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-white/60 text-sm">Phone</div>
                  <a
                    href="tel:+917975141960"
                    className="text-white hover:text-accent transition-colors duration-200"
                  >
                    +91 7975141960
                  </a>
                </div>
                <div>
                  <div className="text-white/60 text-sm">Location</div>
                  <div className="text-white">Bandri, Sandur, Karnataka</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/80 text-sm mb-4 md:mb-0 flex items-center">
                © {new Date().getFullYear()} Sahana Pujar. Made with{' '}
                <Heart className="h-4 w-4 mx-1 text-red-400" /> 
                and lots of code.
              </div>
              
              <Button
                variant="outline-hero"
                size="sm"
                onClick={scrollToTop}
                className="hover-lift"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;