import { GraduationCap, Star, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering (B.E.)',
      specialization: 'Artificial Intelligence & Machine Learning',
      institution: 'Bellary Institute of Technology',
      period: '2021 - 2025',
      cgpa: '9.01/10',
      status: 'Current',
      highlights: [
        'Exceptional academic performance with 9.01 CGPA',
        'Specialized in AI/ML technologies and applications',
        'Active participation in technical projects and hackathons',
        'Strong foundation in programming and data structures'
      ]
    },
    {
      degree: 'Pre-University Course (PUC)',
      specialization: 'Physics, Chemistry, Mathematics, Biology (PCMB)',
      institution: 'Pre-University College',
      period: '2019 - 2021',
      cgpa: '90%',
      status: 'Completed',
      highlights: [
        'Strong foundation in science and mathematics',
        'Excellent performance in competitive subjects',
        'Developed analytical and problem-solving skills',
        'Prepared for engineering entrance examinations'
      ]
    },
    {
      degree: 'Secondary School Education',
      specialization: 'General Education (ICSE)',
      institution: 'Sandur Girls Residential School',
      period: '2018 - 2019',
      cgpa: '77%',
      status: 'Completed',
      highlights: [
        'Outstanding academic achievement',
        'Active participation in extracurricular activities',
        'Leadership roles in school activities',
        'Strong foundation for higher education'
      ]
    }
  ];

  return (
    <section id="education" className="section-padding bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 animate-bounce-in">
            <GraduationCap className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-stagger-1">
            Academic journey marked by excellence and continuous learning
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={edu.degree} className={`hover-lift animate-fade-in-up animate-stagger-${index + 1}`}>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Main Info */}
                  <div className="md:col-span-2">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                      <Badge 
                        variant={edu.status === 'Current' ? 'default' : 'secondary'}
                        className="px-3 py-1"
                      >
                        {edu.status}
                      </Badge>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-accent mb-2">
                      {edu.specialization}
                    </h4>
                    
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      {edu.institution}
                    </div>
                    
                    <div className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-accent/5 rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        <Star className="h-6 w-6 text-accent mr-2" />
                        <span className="text-sm font-medium text-accent">Performance</span>
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-1">
                        {edu.cgpa}
                      </div>
                      {edu.cgpa.includes('/10') && (
                        <div className="text-sm text-muted-foreground">CGPA</div>
                      )}
                    </div>
                    
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-sm font-medium text-primary mb-1">Duration</div>
                      <div className="text-lg font-semibold text-foreground">{edu.period}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;