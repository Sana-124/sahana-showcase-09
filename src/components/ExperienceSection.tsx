import { Briefcase, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      period: '2024',
      title: 'Hack-24 Hackathon Participant',
      organization: 'Innovation Competition',
      description: 'Participated in a competitive 24-hour hackathon, developing innovative solutions under time constraints. Collaborated with cross-functional teams to deliver working prototypes and presentations.',
      achievements: [
        'Successfully completed 24-hour development challenge',
        'Demonstrated rapid prototyping and problem-solving skills',
        'Collaborated effectively in high-pressure environment'
      ]
    },
    {
      period: '2023-2024',
      title: 'AI & ML Projects Developer',
      organization: 'Academic & Personal Projects',
      description: 'Developed multiple machine learning and data analysis projects focusing on real-world applications. Gained hands-on experience with various ML algorithms and data processing techniques.',
      achievements: [
        'Built Brain Tumor Detection System with high accuracy',
        'Developed Log File Analyzer for enterprise use',
        'Created AgriTech platform connecting farmers and buyers'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 animate-bounce-in">
            <Briefcase className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-stagger-1">
            Building expertise through academic projects, hackathons, and certifications
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-accent/30"></div>

          {experiences.map((experience, index) => (
            <div key={experience.title} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'} animate-fade-in-up animate-stagger-${index + 1}`}>
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center z-10">
                <Calendar className="h-4 w-4 text-white" />
              </div>

              <Card className={`ml-12 md:ml-0 hover-lift ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {experience.period}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {experience.title}
                  </h3>
                  
                  <h4 className="text-lg font-semibold text-accent mb-4">
                    {experience.organization}
                  </h4>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold text-foreground mb-3 flex items-center">
                      <Award className="h-5 w-5 text-accent mr-2" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;