import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Heart, Star, Gift } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Easter Celebration Service",
      date: "March 31, 2024",
      time: "10:00 AM",
      location: "Main Sanctuary",
      description: "Join us for a special Easter service celebrating the resurrection of Jesus Christ with inspiring worship and fellowship.",
      category: "Special Service",
      featured: true,
      attendees: "All Welcome"
    },
    {
      title: "Community Outreach Day",
      date: "April 6, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Downtown Community Center",
      description: "Serve our local community through food distribution, clothing drive, and neighborhood cleanup activities.",
      category: "Outreach",
      featured: false,
      attendees: "Volunteers Needed"
    },
    {
      title: "Youth Spring Camp",
      date: "April 12-14, 2024",
      time: "Friday 6:00 PM - Sunday 4:00 PM",
      location: "Camp Renewal",
      description: "Three-day retreat for our youth ministry featuring worship, teaching, outdoor activities, and spiritual growth.",
      category: "Youth",
      featured: false,
      attendees: "Ages 13-18"
    },
    {
      title: "Marriage Enrichment Workshop",
      date: "April 20, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Fellowship Hall",
      description: "Strengthen your marriage through biblical principles, practical tools, and meaningful conversations.",
      category: "Marriage",
      featured: false,
      attendees: "Married Couples"
    },
    {
      title: "Children's Fun Day",
      date: "April 27, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Church Grounds",
      description: "Special event for children featuring games, activities, face painting, and lunch. Parents are welcome to join!",
      category: "Children",
      featured: false,
      attendees: "Ages 3-12"
    }
  ];

  const recurringEvents = [
    {
      title: "Sunday Worship Service",
      schedule: "Every Sunday",
      time: "10:00 AM",
      location: "Main Sanctuary",
      description: "Join us for inspiring worship, biblical teaching, and fellowship every Sunday morning."
    },
    {
      title: "Life Groups",
      schedule: "Various times throughout the week",
      time: "See schedule",
      location: "Various locations",
      description: "Small group Bible studies and fellowship meetings in homes and at the church."
    },
    {
      title: "Prayer Meeting",
      schedule: "Wednesdays",
      time: "7:00 PM",
      location: "Prayer Room",
      description: "Come together in prayer for our church, community, and personal needs."
    },
    {
      title: "Youth Ministry",
      schedule: "Fridays",
      time: "7:00 PM",
      location: "Youth Center",
      description: "Dynamic ministry for teenagers featuring worship, teaching, and fun activities."
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Special Service": return Star;
      case "Outreach": return Heart;
      case "Youth": return Users;
      case "Marriage": return Heart;
      case "Children": return Gift;
      default: return Calendar;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Special Service": return "bg-accent text-accent-foreground";
      case "Outreach": return "bg-green-500 text-white";
      case "Youth": return "bg-blue-500 text-white";
      case "Marriage": return "bg-pink-500 text-white";
      case "Children": return "bg-purple-500 text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary-light to-primary-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Church <span className="font-display text-accent text-elegant">Events</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Stay connected with upcoming events, special services, and opportunities to grow in community.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {upcomingEvents.filter(event => event.featured).map((event, index) => (
        <section key={event.title} className="py-20 section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Featured <span className="text-elegant">Event</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Don't miss this special upcoming event at Abundant Life.
              </p>
            </div>

            <Card className="card-3d max-w-4xl mx-auto animate-scale-in">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative media-hover">
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center">
                      <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center animate-glow">
                        {(() => {
                          const IconComponent = getCategoryIcon(event.category);
                          return <IconComponent className="h-10 w-10 text-accent-foreground" />;
                        })()}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Badge className={`mb-3 ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </Badge>
                    <h3 className="text-3xl font-semibold text-card-foreground mb-4">
                      {event.title}
                    </h3>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-5 w-5 mr-3" />
                        <span className="text-lg">{event.date}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-5 w-5 mr-3" />
                        <span className="text-lg">{event.time}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-5 w-5 mr-3" />
                        <span className="text-lg">{event.location}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-5 w-5 mr-3" />
                        <span className="text-lg">{event.attendees}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button className="btn-hero btn-hover-lift">
                        Register Now
                      </Button>
                      <Button variant="outline" className="btn-hover-lift">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      ))}

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Upcoming <span className="text-elegant">Events</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mark your calendar for these exciting opportunities to connect and grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.filter(event => !event.featured).map((event, index) => (
              <Card key={event.title} className="card-3d animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className={`${getCategoryColor(event.category)}`}>
                      {event.category}
                    </Badge>
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                      {(() => {
                        const IconComponent = getCategoryIcon(event.category);
                        return <IconComponent className="h-5 w-5 text-accent" />;
                      })()}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      {event.attendees}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="btn-hero btn-hover-lift flex-1">
                      Register
                    </Button>
                    <Button size="sm" variant="outline" className="btn-hover-lift">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Events */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Regular <span className="text-elegant">Schedule</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for our weekly gatherings and ongoing ministry opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recurringEvents.map((event, index) => (
              <Card key={event.title} className="card-3d animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                      <Calendar className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground">
                        {event.title}
                      </h3>
                      <p className="text-sm text-accent font-medium">
                        {event.schedule}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
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
              Stay <span className="font-display text-accent text-elegant">Connected</span>
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Never miss an event! Subscribe to our newsletter or follow us on social media for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="btn-hover-lift">
                Subscribe to Newsletter
              </Button>
              <Button size="lg" variant="outline" className="btn-hover-lift border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Follow on Social Media
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;