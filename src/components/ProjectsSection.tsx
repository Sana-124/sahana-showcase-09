import { ExternalLink, Github, Folder } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Log File Analyzer',
      description: 'Advanced data visualization and log analysis system that processes large log files to identify patterns, errors, and performance metrics. Features interactive dashboards and real-time monitoring capabilities.',
      technologies: ['Python', 'Data Visualization', 'Pandas', 'Matplotlib'],
      features: ['Real-time log processing', 'Interactive dashboards', 'Pattern recognition', 'Performance metrics'],
      category: 'Data Analysis'
    },
    {
      title: 'Brain Tumor Detection System',
      description: 'ML-based medical imaging system that analyzes MRI scans to detect brain tumors with high accuracy. Utilizes deep learning algorithms and provides detailed diagnostic insights.',
      technologies: ['Machine Learning', 'Python', 'TensorFlow', 'Computer Vision'],
      features: ['MRI scan analysis', 'Deep learning models', 'High accuracy detection', 'Diagnostic insights'],
      category: 'AI/ML'
    },
    {
      title: 'AgriTech Marketplace',
      description: 'Comprehensive digital platform connecting farmers with buyers and providing data-sharing capabilities. Features marketplace functionality, crop management tools, and agricultural insights.',
      technologies: ['Full-Stack Development', 'Database Design', 'API Integration', 'User Authentication'],
      features: ['Marketplace platform', 'Data sharing', 'Crop management', 'Agricultural insights'],
      category: 'Full-Stack'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 animate-bounce-in">
            <Folder className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-stagger-1">
            Innovative solutions showcasing technical expertise and creative problem-solving
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className={`hover-lift animate-fade-in-up animate-stagger-${index + 1}`}>
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-2xl text-foreground">{project.title}</CardTitle>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-3 flex-shrink-0">
                    <Button variant="outline" size="sm" className="hover-lift">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="secondary" size="sm" className="hover-lift">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="hover-lift">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-muted-foreground flex items-center">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover-lift animate-fade-in-up animate-stagger-4">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;