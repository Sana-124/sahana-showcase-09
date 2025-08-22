import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%25239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
              Sahana
            </span>
          </h1>
        </div>
        
        <div className="animate-fade-in-up animate-stagger-1">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-8 font-light">
            AI & ML Engineer | Software Developer | Technology Enthusiast
          </h2>
        </div>
        
        <div className="animate-fade-in-up animate-stagger-2">
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Passionate about artificial intelligence and machine learning with a CGPA of 9.01. 
            I create cutting-edge solutions that transform data into meaningful insights and drive technological advancement.
          </p>
        </div>

        <div className="animate-fade-in-up animate-stagger-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" onClick={() => scrollToSection('#projects')} className="hover-lift">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline-hero" size="lg" onClick={() => scrollToSection('#contact')} className="hover-lift">
            Let's Connect
          </Button>
        </div>

        <div className="animate-fade-in-up animate-stagger-4 flex justify-center space-x-6">
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('#about')}
          className="text-white/70 hover:text-white transition-colors duration-200"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;