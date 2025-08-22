import { Code, Database, Brain, Users, Languages } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
      ]
    },
    {
      icon: Database,
      title: 'Technologies & Tools',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Jupyter Notebook', level: 85 },
      ]
    },
    {
      icon: Brain,
      title: 'AI & ML',
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'Data Structures & Algorithms', level: 80 },
        { name: 'Data Analysis', level: 75 },
      ]
    },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: [
        { name: 'Adaptability', level: 95 },
        { name: 'Learning Ability', level: 95 },
        { name: 'Teamwork', level: 90 },
        { name: 'Problem Solving', level: 88 },
      ]
    }
  ];

  const languages = ['Kannada', 'English', 'Hindi'];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 animate-bounce-in">
            <Brain className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-stagger-1">
            A comprehensive toolkit for building innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className={`hover-lift animate-fade-in-up animate-stagger-${index + 1}`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mr-4">
                    <category.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-foreground font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Languages */}
        <div className="text-center animate-fade-in-up animate-stagger-4">
          <div className="flex items-center justify-center mb-6">
            <Languages className="h-6 w-6 text-accent mr-3" />
            <h3 className="text-2xl font-semibold text-foreground">Languages</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((language) => (
              <Badge key={language} variant="secondary" className="text-lg py-2 px-4 hover-lift">
                {language}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;