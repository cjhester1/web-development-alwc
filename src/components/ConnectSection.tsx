import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Heart, BookOpen, ArrowRight } from "lucide-react";

const ConnectSection = () => {
  const connectOptions = [
    {
      title: "New Here?",
      description: "We'd love to meet you! Learn about our community and what to expect.",
      icon: Heart,
      badge: "Start Here",
      cta: "Plan Your First Visit",
      link: "/connect",
      color: "bg-accent"
    },
    {
      title: "Upcoming Events",
      description: "Join us for special services, community gatherings, and ministry events.",
      icon: Calendar,
      badge: "This Week",
      cta: "View All Events",
      link: "/events",
      color: "bg-primary"
    },
    {
      title: "Life Groups",
      description: "Connect with others in small groups focused on fellowship and growth.",
      icon: Users,
      badge: "Join Anytime",
      cta: "Find Your Group",
      link: "/ministries",
      color: "bg-primary-light"
    },
    {
      title: "Resources",
      description: "Access study guides, prayer declarations, and spiritual growth materials.",
      icon: BookOpen,
      badge: "Free Access",
      cta: "Explore Resources",
      link: "/resources",
      color: "bg-accent"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How to{" "}
            <span className="font-display text-accent text-5xl md:text-6xl">
              Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're new to faith or have been walking with God for years, 
            there's a place for you in our community.
          </p>
        </div>

        {/* Connect Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {connectOptions.map((option, index) => (
            <Card 
              key={option.title} 
              className="card-elegant hover:shadow-lg transition-smooth group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth`}>
                  <option.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex justify-center mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {option.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold">
                  {option.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {option.description}
                </p>
                <Button 
                  asChild 
                  className="w-full btn-hover-lift group"
                  variant={index % 2 === 0 ? "default" : "outline"}
                >
                  <Link to={option.link}>
                    {option.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What's Happening Section */}
        <div className="bg-muted rounded-3xl p-8 md:p-12 animate-scale-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                What's Happening
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Community Prayer Night</h4>
                    <p className="text-muted-foreground">Wednesday, 7:00 PM - Join us for an evening of prayer and fellowship</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">New Member Class</h4>
                    <p className="text-muted-foreground">Saturday, 10:00 AM - Learn about our church family and get connected</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Community Outreach</h4>
                    <p className="text-muted-foreground">Next Sunday - Join us as we serve our local community</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="neuro-card p-8 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-foreground mb-3">
                    Take the Next Step
                  </h4>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Ready to grow deeper in your faith journey?
                  </p>
                  <div className="space-y-4">
                    <Button asChild className="w-full btn-hero btn-hover-lift text-base font-semibold py-6">
                      <Link to="/give">
                        Partner with Us <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full btn-neuro text-base font-semibold py-6">
                      <Link to="/ministries">
                        Join a Ministry
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;