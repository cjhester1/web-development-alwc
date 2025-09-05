import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Coffee, 
  Car,
  Baby,
  Music,
  Calendar,
  Phone,
  Mail,
  ArrowRight
} from "lucide-react";

const Connect = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary-light to-primary-glow text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            How to{" "}
            <span className="font-display text-accent text-6xl md:text-7xl block">
              Connect
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Whether you're visiting for the first time or ready to go deeper, 
            we're here to help you take your next step in faith.
          </p>
        </div>
      </section>

      {/* New Visitor Section */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              New to Abundant Life?
            </h2>
            <p className="text-xl text-muted-foreground">
              We can't wait to meet you! Here's what you can expect.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* What to Expect */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8">What to Expect</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Coffee className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">Warm Welcome</h4>
                    <p className="text-muted-foreground">
                      Grab coffee and donuts before service. Our friendly greeters will help you find your way.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Music className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">Inspiring Worship</h4>
                    <p className="text-muted-foreground">
                      Experience authentic worship through contemporary music and biblical teaching.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">Genuine Community</h4>
                    <p className="text-muted-foreground">
                      Connect with others who are on the same journey of faith and growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Info Card */}
            <Card className="card-elegant">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4">Sunday Service</Badge>
                <CardTitle className="text-2xl">Join Us This Sunday</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>10:00 AM - 11:30 AM</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p>123 Faith Street</p>
                    <p>Hope City, HC 12345</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <Car className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Free Parking</p>
                  </div>
                  <div className="text-center">
                    <Baby className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Kids Ministry</p>
                  </div>
                </div>
                <Button className="w-full btn-hero btn-hover-lift">
                  Plan Your Visit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Connection Opportunities */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ways to Get Connected
            </h2>
            <p className="text-xl text-muted-foreground">
              Find your place in our community through these opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Life Groups */}
            <Card className="card-elegant hover:shadow-lg transition-smooth">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle>Life Groups</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Connect in small groups for fellowship, prayer, and Bible study throughout the week.
                </p>
                <Button variant="outline" className="w-full btn-hover-lift">
                  Find a Group
                </Button>
              </CardContent>
            </Card>

            {/* Volunteer */}
            <Card className="card-elegant hover:shadow-lg transition-smooth">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Serve & Volunteer</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Use your gifts and talents to serve others in our church and community.
                </p>
                <Button variant="outline" className="w-full btn-hover-lift">
                  Get Involved
                </Button>
              </CardContent>
            </Card>

            {/* Events */}
            <Card className="card-elegant hover:shadow-lg transition-smooth">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Special Events</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Join us for special services, community gatherings, and seasonal celebrations.
                </p>
                <Button variant="outline" className="w-full btn-hover-lift">
                  View Events
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 section-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground">
              Have questions? Want to know more? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="How can we help you connect?"
                    rows={4}
                  />
                </div>
                <Button className="w-full btn-hero btn-hover-lift">
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Get in Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">Call Us</p>
                        <p className="text-muted-foreground">(123) 456-7890</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">Email Us</p>
                        <p className="text-muted-foreground">info@abundantlifeworship.org</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-accent mt-1" />
                      <div>
                        <p className="font-medium">Visit Us</p>
                        <p className="text-muted-foreground">
                          123 Faith Street<br />
                          Hope City, HC 12345
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elegant bg-gradient-to-r from-accent/10 to-primary/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Thursday</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday</span>
                      <span>9:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>By Appointment</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Service Day</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Connect;