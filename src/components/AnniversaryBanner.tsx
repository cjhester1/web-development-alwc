import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AnniversaryBanner = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/3 via-accent/3 to-community/3">
      <div className="max-w-6xl mx-auto">
        <Card className="card-3d overflow-hidden bg-gradient-to-br from-card via-card/95 to-muted/50 border-2 border-accent/30 shadow-2xl">
          <CardContent className="p-8 sm:p-12 lg:p-16 relative">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-accent/20 to-primary/20 text-primary border-accent/30 text-sm font-semibold px-4 py-2">
                  ✨ Special Celebration ✨
                </Badge>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                  <span className="text-gradient drop-shadow-lg">12th Anniversary</span>
                </h2>
                <div className="space-y-3 mb-8">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary tracking-wide">
                    FAITH ROOTED. LOVE DRIVEN.
                  </p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent tracking-wide">
                    LIFE ABUNDANT.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-card/80 to-muted/60 rounded-2xl p-6 mb-8 border-2 border-accent/20 shadow-lg backdrop-blur-sm">
                  <p className="text-sm sm:text-base italic text-muted-foreground leading-relaxed">
                    "Then Jesus came to them and said, 'All authority in heaven and on earth has been given to me. 
                    Therefore go and make disciples of all nations, baptizing them in the name of the Father and of 
                    the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. 
                    And surely I am with you always, to the very end of the age.'"
                  </p>
                  <p className="text-right mt-2 font-semibold text-primary">- Matthew 28:18-20</p>
                </div>

                {/* Event Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Coming Soon</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>Sundays at 10AM</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <MapPin className="h-4 w-4 text-community" />
                    <span>1435 Glenn St, Vallejo CA</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Visual Element */}
              <div className="flex-shrink-0">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-community rounded-full opacity-30 animate-pulse blur-sm"></div>
                  {/* Middle ring */}
                  <div className="absolute inset-2 bg-gradient-to-br from-primary/90 via-accent/90 to-community/90 rounded-full shadow-2xl">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary via-accent to-community p-0.5">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-card to-background flex items-center justify-center">
                        <span className="text-primary font-display font-bold text-3xl sm:text-4xl lg:text-5xl drop-shadow-lg">12</span>
                      </div>
                    </div>
                  </div>
                  {/* Sparkle effects */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full animate-ping"></div>
                  <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                  <div className="absolute top-8 left-8 w-1 h-1 bg-community rounded-full animate-ping animation-delay-300"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AnniversaryBanner;