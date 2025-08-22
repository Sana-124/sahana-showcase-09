import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Hack-24 Hackathon Certificate',
      issuer: 'Innovation Competition Platform',
      year: '2024',
      type: 'Competition',
      status: 'Completed',
      description: 'Official certification for successful participation in the 24-hour hackathon challenge, demonstrating rapid development skills and innovative problem-solving.',
      skills: ['Rapid Prototyping', 'Team Collaboration', 'Innovation', 'Problem Solving'],
      credentialId: 'HACK24-2024-SP',
      verificationAvailable: true,
      certificateUrl: 'https://drive.google.com/file/d/13hcFzkYVATk3akOH5pAgrW2jzU0zaNaQ/view?usp=drivesdk'
    },
    {
      title: 'Full-Stack Java Development',
      issuer: 'AICTE (All India Council for Technical Education)',
      year: '2023',
      type: 'Professional',
      status: 'Completed',
      description: 'Comprehensive certification in full-stack Java development covering enterprise-level web application development, database integration, and modern development practices.',
      skills: ['Java', 'Spring Framework', 'Database Design', 'Web Development', 'API Development'],
      credentialId: 'AICTE-JAVA-2023-SP',
      verificationAvailable: true,
      certificateUrl: 'https://drive.google.com/file/d/136G9SM59Dmx_FjYOR3qnM3iKvjrIqno2/view?usp=drivesdk'
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      'Competition': 'bg-accent/10 text-accent border-accent/20',
      'Professional': 'bg-primary/10 text-primary border-primary/20',
      'Academic': 'bg-purple-100 text-purple-700 border-purple-200'
    };
    return colors[type as keyof typeof colors] || 'bg-muted text-muted-foreground';
  };

  return (
    <section id="certifications" className="section-padding bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 animate-bounce-in">
            <Award className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-stagger-1">
            Professional certifications and credentials that validate my technical expertise
          </p>
        </div>

        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <Card key={cert.title} className={`hover-lift animate-fade-in-up animate-stagger-${index + 1}`}>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Main Info */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-foreground">{cert.title}</h3>
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        </div>
                        <h4 className="text-lg font-semibold text-accent mb-2">{cert.issuer}</h4>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className={getTypeColor(cert.type)}>
                          {cert.type}
                        </Badge>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-sm">{cert.year}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {cert.description}
                    </p>
                    
                    {/* Skills */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-foreground mb-3">Skills Covered</h5>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="hover-lift">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Credential Info */}
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="text-sm text-muted-foreground mb-1">Credential ID</div>
                      <div className="font-mono text-sm text-foreground">{cert.credentialId}</div>
                    </div>
                  </div>
                  
                  {/* Actions & Status */}
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                      <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="font-semibold text-green-800">{cert.status}</div>
                      <div className="text-sm text-green-600 mt-1">Verified Certificate</div>
                    </div>
                    
                     {cert.verificationAvailable && (
                       <div className="space-y-3">
                         <Button 
                           variant="outline" 
                           className="w-full hover-lift"
                           onClick={() => window.open(cert.certificateUrl, '_blank')}
                         >
                           <ExternalLink className="mr-2 h-4 w-4" />
                           View Certificate
                         </Button>
                         <Button variant="secondary" className="w-full hover-lift">
                           Verify Credential
                         </Button>
                       </div>
                     )}
                    
                    <div className="text-center p-4 bg-accent/5 rounded-lg">
                      <div className="text-sm font-medium text-accent mb-1">Issued</div>
                      <div className="text-sm text-foreground">{cert.year}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in-up animate-stagger-3">
          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Committed to Continuous Learning
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always expanding my skillset through new certifications and learning opportunities. 
              Stay tuned for more credentials as I continue growing in the tech industry.
            </p>
            <Button variant="gradient" size="lg" className="hover-lift">
              View All Credentials
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;