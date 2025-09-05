import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-church.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 hero-enhanced">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-accent animate-gradient"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary-glow/30 rounded-full blur-3xl animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-community/10 rounded-full blur-2xl animate-float animation-delay-2000"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Video Background - Ready for implementation */}
        {/* <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/path-to-video.mp4" type="video/mp4" />
        </video> */}
        
        {/* Fallback Image Background */}
        <img
          src={heroImage}
          alt="Abundant Life Worship sanctuary"
          className="w-full h-full object-cover opacity-15 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight px-4">
            Welcome to{" "}
            <span className="font-display text-accent text-5xl sm:text-6xl md:text-7xl lg:text-8xl block mt-2">
              Abundant Life
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold block mt-2 text-primary-foreground/90">
              Worship Center
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Faith Rooted. Love Driven. Life Abundant.<br />
            Transforming lives through faith, building community through love.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 px-4">
            <Button
              asChild
              size="lg"
              className="btn-hero text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 btn-hover-lift w-full sm:w-auto"
            >
              <Link to="/connect">
                Plan Your Visit <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 btn-hover-lift w-full sm:w-auto"
            >
              <Link to="/media">
                Watch Latest Message
              </Link>
            </Button>
          </div>

          {/* Service Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto px-4 mb-16 sm:mb-20">
            {/* Sunday Service */}
            <Card className="neuro-card bg-card/98 backdrop-blur-md animate-slide-up border-0">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-card-foreground">
                    Sunday Worship
                  </h3>
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <div className="space-y-2 text-left">
                  <div className="flex items-center text-muted-foreground text-sm sm:text-base">
                    <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>10:00 AM - In-Person Service</span>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm sm:text-base">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>1435 Glenn St, Vallejo CA</span>
                  </div>
                </div>
                <Button asChild className="w-full mt-6 btn-hero btn-hover-lift text-sm sm:text-base font-semibold py-3">
                  <Link to="/media">
                    Join Online Service
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Life Groups */}
            <Card className="neuro-card bg-card/98 backdrop-blur-md animate-slide-up border-0">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-card-foreground">
                    Life Groups
                  </h3>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground text-xs font-bold">+</span>
                  </div>
                </div>
                <div className="space-y-2 text-left">
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Connect with others in small group settings
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Various times throughout the week
                  </p>
                </div>
                <Button asChild variant="outline" className="w-full mt-6 btn-neuro text-sm sm:text-base font-semibold py-3">
                  <Link to="/connect">
                    Join a Life Group
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;