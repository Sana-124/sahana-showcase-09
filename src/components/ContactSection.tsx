import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b339ce6a-ebb4-4d02-aca9-35a6354f7f5a',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: formData.name,
          subject: `New message from ${formData.name} - Portfolio Contact Form`
        })
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "✅ Message sent successfully!",
          description: "I'll get back to you soon.",
        });
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "❌ Oops! Something went wrong.",
        description: "Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pujarsahana1718@gmail.com',
      href: 'mailto:pujarsahana1718@gmail.com',
      description: 'Send me an email'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7975141960',
      href: 'tel:+917975141960',
      description: 'Give me a call'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bandri, Sandur',
      href: '#',
      description: 'Karnataka, India'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pujar-sahana',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/Sana-124/python-code.git',
      color: 'hover:text-gray-900'
    },
    {
      icon: MessageSquare,
      name: 'WhatsApp',
      href: 'https://wa.me/917975141960',
      color: 'hover:text-green-600'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 animate-bounce-in">
            <Mail className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-stagger-1">
            Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover-lift animate-fade-in-left">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <Send className="h-6 w-6 text-accent mr-3" />
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    disabled={isSubmitting}
                    className="mt-2 transition-all duration-200 focus:ring-2 focus:ring-accent/20 focus:border-accent"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                    className="mt-2 transition-all duration-200 focus:ring-2 focus:ring-accent/20 focus:border-accent"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                    disabled={isSubmitting}
                    className="mt-2 transition-all duration-200 focus:ring-2 focus:ring-accent/20 focus:border-accent resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="gradient" 
                  size="lg" 
                  className="w-full hover-lift transition-all duration-200" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-right">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <Card key={info.label} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full">
                        <info.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{info.label}</h4>
                        <p className="text-muted-foreground text-sm mb-1">{info.description}</p>
                        {info.href !== '#' ? (
                          <a
                            href={info.href}
                            className="text-accent hover:text-accent-dark transition-colors duration-200 font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-foreground font-medium">{info.value}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  Connect on Social Media
                </h3>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center w-12 h-12 bg-muted rounded-full transition-all duration-200 hover:scale-110 ${social.color}`}
                      title={social.name}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="bg-gradient-to-r from-accent/5 to-primary/5 hover-lift">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Quick Response Guarantee
                </h3>
                <p className="text-muted-foreground mb-4">
                  I typically respond to messages within 24 hours. For urgent inquiries, 
                  feel free to reach out via phone or WhatsApp.
                </p>
                <div className="inline-flex items-center text-accent font-medium">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Usually replies within hours
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;