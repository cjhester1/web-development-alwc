import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Clock, BookOpen, Headphones, Video, Mic } from "lucide-react";

const Media = () => {
  const sermons = [
    {
      title: "Walking in God's Abundant Grace",
      speaker: "Pastor Michael Johnson",
      date: "March 15, 2024",
      duration: "42 min",
      series: "Abundant Life Series",
      description: "Discover how to live in the fullness of God's grace and experience His abundant blessings.",
      thumbnail: "/placeholder.svg"
    },
    {
      title: "Building Unshakeable Faith",
      speaker: "Pastor Sarah Johnson",
      date: "March 8, 2024",
      duration: "38 min",
      series: "Faith Foundations",
      description: "Learn the principles of developing a faith that remains strong through every storm.",
      thumbnail: "/placeholder.svg"
    },
    {
      title: "The Power of Community",
      speaker: "Pastor Michael Johnson",
      date: "March 1, 2024",
      duration: "45 min",
      series: "Together We Rise",
      description: "Understanding how biblical community transforms lives and strengthens our faith journey.",
      thumbnail: "/placeholder.svg"
    },
    {
      title: "Purpose-Driven Living",
      speaker: "Pastor David Thompson",
      date: "February 22, 2024",
      duration: "41 min",
      series: "Life on Purpose",
      description: "Discovering and walking in your God-given purpose with confidence and clarity.",
      thumbnail: "/placeholder.svg"
    },
    {
      title: "Overflow of Love",
      speaker: "Pastor Sarah Johnson",
      date: "February 15, 2024",
      duration: "39 min",
      series: "Heart of Worship",
      description: "Exploring how God's love overflows through us to impact our families and communities.",
      thumbnail: "/placeholder.svg"
    },
    {
      title: "Spiritual Breakthrough",
      speaker: "Pastor Michael Johnson",
      date: "February 8, 2024",
      duration: "44 min",
      series: "Breaking Barriers",
      description: "Practical steps to experience spiritual breakthrough in every area of your life.",
      thumbnail: "/placeholder.svg"
    }
  ];

  const futureFeatures = [
    {
      icon: BookOpen,
      title: "Daily Devotionals",
      description: "Coming Soon: Daily inspiration and biblical reflections to start your day with purpose.",
      status: "In Development"
    },
    {
      icon: Headphones,
      title: "Podcast Series",
      description: "Coming Soon: Weekly podcast discussions about faith, life, and community.",
      status: "Coming Soon"
    },
    {
      icon: Video,
      title: "Live Streaming",
      description: "Join us live every Sunday morning for worship and teaching.",
      status: "Available Now"
    },
    {
      icon: Mic,
      title: "Audio Sermons",
      description: "Listen to our complete sermon library on-the-go with audio-only versions.",
      status: "Available Now"
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
              Media <span className="font-display text-accent text-elegant">&amp; Messages</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Experience transformative messages and connect with God through our sermon library and media resources.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Sermon */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Latest <span className="text-elegant">Message</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't miss our most recent sermon from Sunday's service.
            </p>
          </div>

          <Card className="card-3d max-w-4xl mx-auto animate-scale-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative media-hover group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:animate-glow">
                      <Play className="h-8 w-8 text-accent-foreground ml-1" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <Badge className="mb-3">{sermons[0].series}</Badge>
                  <h3 className="text-2xl font-semibold text-card-foreground mb-3">
                    {sermons[0].title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {sermons[0].date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {sermons[0].duration}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {sermons[0].description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button className="btn-hero btn-hover-lift">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Now
                    </Button>
                    <Button variant="outline" className="btn-hover-lift">
                      <Headphones className="h-4 w-4 mr-2" />
                      Listen
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sermon Library */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Sermon <span className="text-elegant">Library</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our complete collection of inspiring messages and teachings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.slice(1).map((sermon, index) => (
              <Card key={sermon.title} className="card-3d animate-slide-up group" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="relative media-hover mb-4 cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:animate-glow transition-all">
                        <Play className="h-6 w-6 text-accent group-hover:text-accent-foreground ml-0.5" />
                      </div>
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="mb-3">{sermon.series}</Badge>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2 line-clamp-2">
                    {sermon.title}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-2">
                    {sermon.speaker}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {sermon.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {sermon.duration}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                    {sermon.description}
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" className="btn-hero btn-hover-lift flex-1">
                      <Play className="h-3 w-3 mr-1" />
                      Watch
                    </Button>
                    <Button size="sm" variant="outline" className="btn-hover-lift">
                      <Headphones className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="btn-hover-lift">
              View All Sermons
            </Button>
          </div>
        </div>
      </section>

      {/* Future Features */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              More <span className="text-elegant">Coming Soon</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're expanding our media offerings to serve you better.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {futureFeatures.map((feature, index) => (
              <Card key={feature.title} className="card-3d animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {feature.title}
                  </h3>
                  <Badge 
                    variant={feature.status === "Available Now" ? "default" : "outline"} 
                    className="mb-3"
                  >
                    {feature.status}
                  </Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
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

export default Media;