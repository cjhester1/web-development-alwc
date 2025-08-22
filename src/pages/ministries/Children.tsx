import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, MapPin, Clock, Star, Heart, Gift, Smile } from "lucide-react";

const Children = () => {
  const ageGroups = [
    {
      title: "Little Lambs (Ages 2-3)",
      description: "Gentle introduction to God's love through songs, stories, and play in a nurturing environment.",
      time: "Sundays 10:00 AM",
      location: "Nursery Wing",
      activities: ["Bible stories", "Worship songs", "Creative play", "Snack time"],
      icon: Heart
    },
    {
      title: "God's Kids (Ages 4-6)",
      description: "Interactive learning about Jesus through games, crafts, and age-appropriate Bible lessons.",
      time: "Sundays 10:00 AM",
      location: "Kids Chapel",
      activities: ["Bible lessons", "Arts & crafts", "Music time", "Games"],
      icon: Star
    },
    {
      title: "Kingdom Kids (Ages 7-10)",
      description: "Deeper Bible study with hands-on activities that help kids apply God's Word to their lives.",
      time: "Sundays 10:00 AM",
      location: "Children's Center",
      activities: ["Bible study", "Scripture memory", "Service projects", "Team challenges"],
      icon: Gift
    },
    {
      title: "Tweens (Ages 11-12)",
      description: "Pre-teen ministry preparing kids for youth group with relevant discussions and mentorship.",
      time: "Sundays 10:00 AM",
      location: "Tween Room",
      activities: ["Life discussions", "Leadership training", "Mentorship", "Fun activities"],
      icon: Smile
    }
  ];

  const specialEvents = [
    {
      title: "Vacation Bible School",
      date: "June 10-14, 2024",
      description: "A week of fun adventures learning about God's amazing love and power through games, crafts, music, and Bible stories."
    },
    {
      title: "Kids Fun Day",
      date: "April 27, 2024",
      description: "Special outdoor event featuring games, bounce houses, face painting, and a fun family picnic."
    },
    {
      title: "Christmas Program",
      date: "December 15, 2024",
      description: "Annual Christmas presentation where our kids share the story of Jesus' birth through song and drama."
    },
    {
      title: "Easter Egg Hunt",
      date: "March 30, 2024",
      description: "Community-wide Easter egg hunt followed by a celebration of Jesus' resurrection."
    }
  ];

  const safetyFeatures = [
    {
      title: "Secure Check-In",
      description: "Electronic check-in system with matching tags for parents and children.",
      icon: "🔒"
    },
    {
      title: "Background Checks",
      description: "All volunteers undergo thorough background screening and training.",
      icon: "✅"
    },
    {
      title: "Medical Needs",
      description: "Trained staff to handle medical needs and emergency situations.",
      icon: "🏥"
    },
    {
      title: "Age-Appropriate Spaces",
      description: "Specially designed rooms and activities for each age group.",
      icon: "🏠"
    }
  ];

  const volunteerOpportunities = [
    {
      role: "Sunday Teacher",
      commitment: "Once a month",
      description: "Lead a class of children through Bible lessons and activities."
    },
    {
      role: "Assistant Helper",
      commitment: "As available",
      description: "Support teachers with activities, crafts, and classroom management."
    },
    {
      role: "Welcome Team",
      commitment: "Rotating schedule",
      description: "Greet families and help with check-in process on Sunday mornings."
    },
    {
      role: "Special Events Team",
      commitment: "Seasonal",
      description: "Help plan and execute special events like VBS and holiday programs."
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
              Children's <span className="font-display text-accent text-elegant">Ministry</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Building strong faith foundations in our children through engaging Bible lessons, creative activities, and loving community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="btn-hero btn-hover-lift">
                Plan Your Visit
              </Button>
              <Button size="lg" variant="secondary" className="btn-hover-lift">
                Volunteer With Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Age <span className="text-elegant">Groups</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every child learns differently. Our age-appropriate programs ensure your child receives the best spiritual foundation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ageGroups.map((group, index) => (
              <Card key={group.title} className="card-3d animate-slide-up group" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:animate-glow">
                      <group.icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge variant="outline">{group.title.match(/\(([^)]+)\)/)?.[1]}</Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {group.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {group.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {group.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {group.location}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Activities include:</p>
                    <div className="flex flex-wrap gap-1">
                      {group.activities.map((activity) => (
                        <Badge key={activity} variant="outline" className="text-xs">
                          {activity}
                        </Badge>
                      ))}
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

      {/* Special Events */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Special <span className="text-elegant">Events</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Throughout the year, we host exciting events that create lasting memories and deepen faith.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {specialEvents.map((event, index) => (
              <Card key={event.title} className="card-3d animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                      <Calendar className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground">
                        {event.title}
                      </h3>
                      <p className="text-sm text-accent font-medium">{event.date}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Safety <span className="text-elegant">First</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your child's safety and security is our top priority. We've implemented comprehensive measures to ensure a safe environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => (
              <Card key={feature.title} className="card-3d animate-slide-up text-center" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Volunteer <span className="text-elegant">Opportunities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our team of dedicated volunteers who are passionate about investing in the next generation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={opportunity.role} className="card-3d animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {opportunity.role}
                    </h3>
                    <Badge>{opportunity.commitment}</Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {opportunity.description}
                  </p>
                  
                  <Button variant="outline" className="btn-hover-lift w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="btn-hero btn-hover-lift">
              Apply to Volunteer
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary-glow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">
              Questions About <span className="font-display text-accent text-elegant">Kids Ministry?</span>
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              We'd love to connect with you and answer any questions about our children's programs. 
              Your child's spiritual growth is important to us!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="btn-hover-lift">
                Contact Children's Director
              </Button>
              <Button size="lg" variant="outline" className="btn-hover-lift border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Children;