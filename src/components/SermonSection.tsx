import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Clock, User, ArrowRight } from "lucide-react";

const SermonSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest{" "}
            <span className="font-display text-accent text-5xl md:text-6xl">
              Message
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Catch up on our most recent sermon or explore our message archive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Featured Sermon */}
          <div className="animate-slide-up">
            <Card className="card-elegant overflow-hidden group hover:shadow-xl transition-smooth">
              <div className="relative bg-gradient-to-br from-primary to-primary-light aspect-video flex items-center justify-center">
                {/* Sermon Thumbnail Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-light/90"></div>
                <Button
                  size="lg"
                  className="relative z-10 w-20 h-20 rounded-full bg-accent hover:bg-accent-hover group-hover:scale-110 transition-smooth shadow-lg"
                  asChild
                >
                  <Link to="/media">
                    <Play className="h-8 w-8 text-accent-foreground ml-1" />
                  </Link>
                </Button>
                
                {/* Series Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-card text-card-foreground">
                    Current Series
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>December 15, 2024</span>
                  <span>•</span>
                  <Clock className="h-4 w-4" />
                  <span>45 min</span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 leading-tight">
                  Walking in God's Abundant Grace
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Pastor Michael Johnson</span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Discover how God's abundant grace transforms our daily walk and empowers us 
                  to live with purpose, hope, and unwavering faith in every season of life.
                </p>

                <div className="flex gap-3">
                  <Button asChild className="flex-1 btn-hover-lift">
                    <Link to="/media">
                      Watch Now <Play className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 btn-hover-lift">
                    <Link to="/resources">
                      Study Guide
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sermon Stats & Archive */}
          <div className="space-y-6 animate-slide-up">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="card-elegant text-center p-6">
                <div className="text-3xl font-bold text-accent mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Messages Available</div>
              </Card>
              <Card className="card-elegant text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">52</div>
                <div className="text-sm text-muted-foreground">Weeks This Year</div>
              </Card>
            </div>

            {/* Recent Messages */}
            <Card className="card-elegant p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">Recent Messages</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-smooth">
                    <Play className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-medium text-foreground group-hover:text-accent transition-smooth">
                      The Power of Community
                    </h5>
                    <p className="text-sm text-muted-foreground">Dec 8, 2024 • Pastor Sarah Wilson</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-smooth">
                    <Play className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-medium text-foreground group-hover:text-accent transition-smooth">
                      Finding Hope in Difficult Times
                    </h5>
                    <p className="text-sm text-muted-foreground">Dec 1, 2024 • Pastor Michael Johnson</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-smooth">
                    <Play className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-medium text-foreground group-hover:text-accent transition-smooth">
                      Gratitude: A Heart of Thanksgiving
                    </h5>
                    <p className="text-sm text-muted-foreground">Nov 24, 2024 • Pastor David Lee</p>
                  </div>
                </div>
              </div>

              <Button asChild variant="outline" className="w-full mt-6 btn-hover-lift">
                <Link to="/media">
                  View All Messages <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

            {/* Podcast Info */}
            <Card className="card-elegant p-6 bg-gradient-to-r from-accent/10 to-primary/10">
              <h4 className="text-xl font-semibold text-foreground mb-2">
                Listen Anywhere
              </h4>
              <p className="text-muted-foreground mb-4">
                Subscribe to our podcast and never miss a message.
              </p>
              <div className="flex gap-2">
                <Button size="sm" className="btn-hover-lift">
                  Apple Podcasts
                </Button>
                <Button size="sm" variant="outline" className="btn-hover-lift">
                  Spotify
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SermonSection;