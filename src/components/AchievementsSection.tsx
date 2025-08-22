import { Trophy, Award, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Hack-24 Hackathon 2024',
      description: 'Successfully participated in the prestigious 24-hour hackathon, demonstrating rapid prototyping skills and innovative thinking under pressure.',
      category: 'Competition',
      year: '2024',
      impact: 'Developed working prototype within time constraints'
    },
    {
      icon: Award,
      title: 'Brain Tumor Detection Prototype',
      description: 'Developed an advanced ML-based system for brain tumor detection using MRI scans, achieving high accuracy in medical image analysis.',
      category: 'Innovation',
      year: '2024',
      impact: 'Potential real-world healthcare application'
    },
    {
      icon: Users,
      title: 'District-level Throwball Championship',
      description: 'Represented institution at district level in throwball, demonstrating teamwork, leadership, and athletic excellence.',
      category: 'Sports',
      year: '2023',
      impact: 'Leadership and team collaboration skills'
    },
    {
      icon: Target,
      title: 'Inter-college Dance Competition',
      description: 'Won recognition in inter-college dance competition, showcasing creativity, dedication, and performance skills.',
      category: 'Cultural',
      year: '2023',
      impact: 'Creative expression and stage confidence'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Competition': 'bg-accent/10 text-accent',
      'Innovation': 'bg-primary/10 text-primary',
      'Sports': 'bg-orange-100 text-orange-700',
      'Cultural': 'bg-purple-100 text-purple-700'
    };
    return colors[category as keyof typeof colors] || 'bg-muted text-muted-foreground';
  };

  return (
    <section id="achievements" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 animate-bounce-in">
            <Trophy className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-stagger-1">
            Recognition for excellence in academics, innovation, and extracurricular activities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={achievement.title} className={`hover-lift animate-fade-in-up animate-stagger-${index + 1}`}>
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full flex-shrink-0">
                    <achievement.icon className="h-6 w-6 text-accent" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={getCategoryColor(achievement.category)}>
                        {achievement.category}
                      </Badge>
                      <span className="text-sm font-medium text-accent">
                        {achievement.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {achievement.description}
                    </p>
                    
                    <div className="bg-accent/5 rounded-lg p-3">
                      <div className="text-sm font-medium text-accent mb-1">Impact</div>
                      <div className="text-sm text-foreground">{achievement.impact}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 animate-fade-in-up animate-stagger-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Major Achievements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">2024</div>
              <div className="text-sm text-muted-foreground">Latest Recognition</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">9.01</div>
              <div className="text-sm text-muted-foreground">Academic CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Active Domains</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;