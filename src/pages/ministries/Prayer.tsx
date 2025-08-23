import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Clock, BookOpen } from "lucide-react";

const Prayer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Heart className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Prayer Ministry
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our community of prayer warriors who intercede for our church, community, and world.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                The Power of Prayer
              </h2>
              <p className="text-muted-foreground mb-6">
                Prayer is the foundation of everything we do at Abundant Life Worship. Our Prayer 
                Ministry is dedicated to seeking God's will, interceding for others, and creating 
                a spiritual covering over our church and community.
              </p>
              <p className="text-muted-foreground mb-8">
                Whether you're new to prayer or have been interceding for years, we invite you 
                to join us in this vital ministry that transforms lives and moves mountains.
              </p>
              <Button className="btn-hero btn-hover-lift">
                Join Prayer Team
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Heart className="h-16 w-16 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Prayer Opportunities Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Prayer Circles</CardTitle>
                <CardDescription>
                  Join small groups for focused prayer and fellowship
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Meet weekly with other believers to pray for specific needs, church 
                  growth, and community transformation.
                </p>
                <Button variant="outline" size="sm" className="btn-hover-glow">
                  Join Circle
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Prayer Night</CardTitle>
                <CardDescription>
                  Monthly dedicated evening of corporate prayer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Join us every first Friday of the month at 7:00 PM for an evening 
                  of worship and intercession.
                </p>
                <Button variant="outline" size="sm" className="btn-hover-glow">
                  Next Event
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Prayer Requests</CardTitle>
                <CardDescription>
                  Submit and receive prayer support from our community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Share your prayer needs confidentially and receive support 
                  from our dedicated prayer team.
                </p>
                <Button variant="outline" size="sm" className="btn-hover-glow">
                  Submit Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Prayer;