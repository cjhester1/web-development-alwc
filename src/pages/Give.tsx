import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, CreditCard, Smartphone, Calendar, Shield, Gift, Users, Star } from "lucide-react";

const Give = () => {
  const givingOptions = [
    {
      title: "One-Time Gift",
      description: "Make a single donation to support our ministry and community outreach efforts.",
      icon: Gift,
      features: ["Secure online processing", "Instant confirmation", "Tax receipt provided"],
      buttonText: "Give Now"
    },
    {
      title: "Monthly Giving",
      description: "Partner with us through regular monthly donations that sustain our ongoing ministry.",
      icon: Calendar,
      features: ["Automatic processing", "Easy to modify", "Consistent impact"],
      buttonText: "Set Up Monthly"
    },
    {
      title: "Text to Give",
      description: "Give quickly and securely by texting your donation amount to our giving number.",
      icon: Smartphone,
      features: ["Simple and fast", "No app required", "Secure text messaging"],
      buttonText: "Learn How"
    }
  ];

  const impactAreas = [
    {
      title: "Local Outreach",
      description: "Supporting our community through food banks, clothing drives, and assistance programs.",
      icon: Users,
      percentage: 35
    },
    {
      title: "Ministry Programs",
      description: "Funding youth ministry, children's programs, life groups, and worship services.",
      icon: Heart,
      percentage: 40
    },
    {
      title: "Facility & Operations",
      description: "Maintaining our church home and supporting staff to serve our community effectively.",
      icon: Star,
      percentage: 25
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      quote: "Giving regularly has been such a blessing. It feels wonderful to know I'm part of something bigger than myself.",
      role: "Monthly Partner"
    },
    {
      name: "David & Lisa K.",
      quote: "We love seeing the impact our giving makes in our community. The transparency and heart behind everything is amazing.",
      role: "Family Partnership"
    },
    {
      name: "Michael R.",
      quote: "The text giving feature makes it so easy to give during service when my heart is moved. Simple and secure.",
      role: "Text Giving User"
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
              Give with <span className="font-display text-accent text-elegant">Purpose</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Your generosity helps transform lives, strengthen community, and advance God's kingdom through our ministry.
            </p>
          </div>
        </div>
      </section>

      {/* Giving Options */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ways to <span className="text-elegant">Give</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the giving method that works best for you. Every gift, regardless of size, makes a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {givingOptions.map((option, index) => (
              <Card key={option.title} className="card-3d animate-slide-up group" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-glow">
                    <option.icon className="h-10 w-10 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    {option.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  
                  <div className="space-y-2 mb-8">
                    {option.features.map((feature) => (
                      <div key={feature} className="flex items-center justify-center text-sm text-muted-foreground">
                        <Shield className="h-4 w-4 mr-2 text-accent" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button className="btn-hero btn-hover-lift w-full">
                    {option.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Your <span className="text-elegant">Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how your generous giving directly supports our ministry and community outreach efforts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <Card key={area.title} className="card-3d animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <area.icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge className="bg-accent text-accent-foreground">
                      {area.percentage}%
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">
                    {area.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${area.percentage}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Give Section */}
      <section className="py-20 section-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="card-3d animate-scale-in">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-card-foreground mb-4">
                  Give <span className="text-elegant">Online</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Make a secure donation right now. Your gift helps us continue transforming lives and serving our community.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {["$25", "$50", "$100", "Other"].map((amount) => (
                  <Button key={amount} variant="outline" className="btn-hover-lift">
                    {amount}
                  </Button>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-hero btn-hover-lift">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Give Now
                </Button>
                <Button size="lg" variant="outline" className="btn-hover-lift">
                  <Smartphone className="h-5 w-5 mr-2" />
                  Text: (555) 123-GIVE
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Generous <span className="text-elegant">Hearts</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from some of our faithful givers about the joy of partnering with our ministry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="card-3d animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div>
                    <p className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-accent">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 section-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Giving <span className="text-elegant">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about giving and financial stewardship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Is online giving secure?",
                answer: "Yes, we use bank-level encryption and security measures to protect all online donations. Your information is never stored on our servers."
              },
              {
                question: "Do I get a tax receipt?",
                answer: "Absolutely. You'll receive an immediate email confirmation and an annual tax statement for all your contributions."
              },
              {
                question: "Can I give to specific ministries?",
                answer: "Yes, you can designate your gift to specific areas like missions, youth ministry, building fund, or general operations."
              },
              {
                question: "What about biblical tithing?",
                answer: "We teach biblical stewardship and encourage tithing as an act of worship and obedience to God, but all giving is voluntary and from the heart."
              }
            ].map((faq, index) => (
              <Card key={faq.question} className="card-3d animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
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
              Questions About <span className="font-display text-accent text-elegant">Giving?</span>
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Our team is here to help you understand biblical stewardship and find the best way for you to give.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="btn-hover-lift">
                Contact Our Team
              </Button>
              <Button size="lg" variant="outline" className="btn-hover-lift border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn About Stewardship
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Give;