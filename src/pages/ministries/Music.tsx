import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music as MusicIcon, Users, Heart, Calendar } from "lucide-react";

const Music = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <MusicIcon className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Music Ministry
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us in leading worship and creating beautiful music that glorifies God and touches hearts.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Worship Through Music
              </h2>
              <p className="text-muted-foreground mb-6">
                Our Music Ministry is the heartbeat of our worship services. We believe that music 
                is a powerful way to connect with God and express our faith. Whether you're a 
                seasoned musician or just beginning your musical journey, there's a place for you.
              </p>
              <p className="text-muted-foreground mb-8">
                From traditional hymns to contemporary worship songs, our diverse musical styles 
                create an atmosphere where everyone can encounter God's presence.
              </p>
              <Button className="btn-hero btn-hover-lift">
                Join the Team
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <MusicIcon className="h-16 w-16 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Opportunities Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Worship Team</CardTitle>
                <CardDescription>
                  Lead congregation in worship through vocals and instruments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Join our talented team of vocalists and instrumentalists who lead worship 
                  every Sunday morning.
                </p>
                <Button variant="outline" size="sm" className="btn-hover-glow">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Special Events</CardTitle>
                <CardDescription>
                  Perform at church events, holidays, and community outreach
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Share your musical gifts at Christmas concerts, Easter services, 
                  and community events.
                </p>
                <Button variant="outline" size="sm" className="btn-hover-glow">
                  Get Involved
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Practice Schedule</CardTitle>
                <CardDescription>
                  Regular rehearsals to prepare for worship services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Join us for weekly rehearsals every Wednesday at 7:00 PM in the 
                  main sanctuary.
                </p>
                <Button variant="outline" size="sm" className="btn-hover-glow">
                  View Schedule
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

export default Music;