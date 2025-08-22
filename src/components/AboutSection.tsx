import { User, Award, MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 animate-bounce-in">
            <User className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-stagger-1">
            Passionate AI & ML student with a drive for innovation and excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Hello! I'm Sahana Pujar
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm an ambitious AI & ML student currently pursuing my B.E. degree with an exceptional 
              CGPA of <span className="font-semibold text-accent">9.01</span>. My journey in technology 
              is driven by a passion for creating innovative solutions that can make a real difference.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With strong foundations in Python, Java, and Machine Learning, I focus on developing 
              intelligent systems that solve real-world problems. My projects span from data analysis 
              to AI-powered applications, always with an emphasis on practical impact and user experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, participating in dance competitions, 
              or playing throwball. I believe in continuous learning and am always excited about the next challenge.
            </p>
          </div>

          <div className="animate-fade-in-right">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Award className="h-6 w-6 text-accent" />
                    <div>
                      <h4 className="font-semibold text-foreground">Academic Excellence</h4>
                      <p className="text-muted-foreground">CGPA: 9.01/10</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-accent" />
                    <div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                      <p className="text-muted-foreground">Bandri, Sandur</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-accent" />
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">+91 7975141960</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-accent" />
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">pujarsahana1718@gmail.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;