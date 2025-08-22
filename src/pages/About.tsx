import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Heart, Star, BookOpen, Award } from "lucide-react";

const About = () => {
  const leaders = [
    {
      name: "Pastor Michael Johnson",
      title: "Senior Pastor",
      description: "Leading Abundant Life with passion for community transformation and spiritual growth.",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Johnson",
      title: "Worship Pastor",
      description: "Creating meaningful worship experiences that connect hearts to God's presence.",
      image: "/placeholder.svg"
    },
    {
      name: "David Thompson",
      title: "Youth Pastor",
      description: "Empowering the next generation through dynamic youth programs and mentorship.",
      image: "/placeholder.svg"
    },
    {
      name: "Lisa Chen",
      title: "Children's Director",
      description: "Building strong foundations of faith in our children through creative ministry.",
      image: "/placeholder.svg"
    }
  ];

  const principles = [
    {
      icon: BookOpen,
      title: "Biblical Foundation",
      description: "We believe in the absolute authority of Scripture as God's written Word."
    },
    {
      icon: Heart,
      title: "Loving Community",
      description: "Creating an environment where everyone feels welcomed, valued, and loved."
    },
    {
      icon: Users,
      title: "Authentic Relationships",
      description: "Building genuine connections that foster spiritual growth and support."
    },
    {
      icon: Target,
      title: "Purpose-Driven Life",
      description: "Helping each person discover and live out their God-given purpose."
    },
    {
      icon: Star,
      title: "Excellence in Ministry",
      description: "Pursuing excellence in all we do to honor God and serve others effectively."
    },
    {
      icon: Award,
      title: "Continuous Growth",
      description: "Committed to lifelong learning and spiritual development."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary-light to-primary-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              About <span className="font-display text-accent text-elegant">Abundant Life</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Discover our heart, our mission, and the people who make our church family special.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our <span className="text-elegant">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                To transform lives through faith, build community through love, and grow together 
                in God's abundant grace. We exist to help people discover their purpose, deepen 
                their faith, and develop meaningful relationships.
              </p>
              <Button className="btn-hero btn-hover-lift">
                Join Our Mission
              </Button>
            </div>
            
            <Card className="card-3d animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  "To be a thriving church family where every person experiences God's love, 
                  discovers their calling, and makes a lasting impact in their community and beyond. 
                  We envision a place where lives are transformed, relationships are restored, 
                  and hope is renewed."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Meet Our <span className="text-elegant">Leadership</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated servants called to lead with wisdom, compassion, and vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <Card key={leader.name} className="card-3d animate-slide-up group" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:animate-glow">
                    <Users className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-accent font-medium mb-3">
                    {leader.title}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {leader.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our <span className="text-elegant">Guiding Principles</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The core values that shape our ministry and guide our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <Card key={principle.title} className="card-3d animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                      <principle.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;