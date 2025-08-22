import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, MapPin, Clock, Zap, Heart, Star, Trophy } from "lucide-react";

const Youth = () => {
  const programs = [
    {
      title: "Friday Night Live",
      description: "High-energy worship, relevant teaching, and authentic community for teens.",
      time: "Fridays 7:00 PM - 9:00 PM",
      location: "Youth Center",
      ages: "13-18 years",
      icon: Zap
    },
    {
      title: "Youth Life Groups",
      description: "Small groups that meet throughout the week for deeper relationships and Bible study.",
      time: "Various times",
      location: "Homes & Church",
      ages: "13-18 years",
      icon: Heart
    },
    {
      title: "Summer Camp",
      description: "Annual week-long camp featuring worship, teaching, activities, and fun.",
      time: "July 15-22, 2024",
      location: "Camp Renewal",
      ages: "13-18 years",
      icon: Star
    },
    {
      title: "Mission Trips",
      description: "Local and international mission opportunities to serve and make a difference.",
      time: "Seasonal",
      location: "Various locations",
      ages: "15-18 years",
      icon: Trophy
    }
  ];

  const upcomingEvents = [
    {
      title: "Game Night Tournament",
      date: "March 29, 2024",
      time: "7:00 PM",
      description: "Epic tournament featuring video games, board games, and prizes!"
    },
    {
      title: "Community Service Day",
      date: "April 5, 2024",
      time: "9:00 AM",
      description: "Serve our community through local outreach projects and volunteer work."
    },
    {
      title: "Youth Worship Night",
      date: "April 12, 2024",
      time: "7:00 PM",
      description: "Special worship night led entirely by our youth worship team."
    },
    {
      title: "Spring Camp Registration",
      date: "April 15, 2024",
      time: "All Day",
      description: "Registration opens for our amazing spring retreat getaway."
    }
  ];

  const leadershipTeam = [
    {
      name: "Pastor David Thompson",
      role: "Youth Pastor",
      description: "Passionate about helping teens discover their purpose and potential in Christ.",
      experience: "8 years in youth ministry"
    },
    {
      name: "Sarah Martinez",
      role: "Assistant Youth Leader",
      description: "Creating safe spaces for authentic conversations and spiritual growth.",
      experience: "4 years in youth ministry"
    },
    {
      name: "Mike Chen",
      role: "Worship Leader",
      description: "Leading our teens in powerful worship experiences and musical expression.",
      experience: "6 years in worship ministry"
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
              Youth <span className="font-display text-accent text-elegant">Ministry</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Empowering the next generation to live boldly for Christ through authentic community, dynamic worship, and life-changing experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="btn-hero btn-hover-lift">
                Join Us This Friday
              </Button>
              <Button size="lg" variant="secondary" className="btn-hover-lift">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our <span className="text-elegant">Programs</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the various ways teens can connect, grow, and serve in our youth ministry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={program.title} className="card-3d animate-slide-up group" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:animate-glow">
                      <program.icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge>{program.ages}</Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {program.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {program.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {program.location}
                    </div>
                  </div>
                  
                  <Button className="btn-hero btn-hover-lift w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Upcoming <span className="text-elegant">Events</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mark your calendar for these exciting youth ministry events and activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={event.title} className="card-3d animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                      <Calendar className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-accent">{event.date}</p>
                      <p className="text-xs text-muted-foreground">{event.time}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Leadership <span className="text-elegant">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate leaders dedicated to serving and mentoring our youth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, index) => (
              <Card key={leader.name} className="card-3d animate-slide-up text-center" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-accent" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {leader.name}
                  </h3>
                  
                  <p className="text-accent font-medium mb-3">
                    {leader.role}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {leader.description}
                  </p>
                  
                  <Badge variant="outline" className="text-xs">
                    {leader.experience}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary-glow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">
              Ready to <span className="font-display text-accent text-elegant">Connect?</span>
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Join us this Friday night for an incredible time of worship, teaching, and community. 
              Bring a friend and experience what our youth ministry is all about!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="btn-hover-lift">
                Contact Youth Pastor
              </Button>
              <Button size="lg" variant="outline" className="btn-hover-lift border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Youth;