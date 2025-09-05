import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AnniversaryBanner = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Card className="card-3d overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-community/5 border-accent/20">
          <CardContent className="p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
                  🎉 Special Celebration
                </Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
                  <span className="text-gradient">12th Anniversary</span>
                </h2>
                <div className="space-y-2 mb-6">
                  <p className="text-xl sm:text-2xl font-semibold text-primary">
                    FAITH ROOTED. LOVE DRIVEN.
                  </p>
                  <p className="text-xl sm:text-2xl font-semibold text-accent">
                    LIFE ABUNDANT.
                  </p>
                </div>
                
                <div className="bg-card/50 rounded-lg p-4 mb-6 border border-accent/20">
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

              {/* Visual Element */}
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-community rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-primary/80 via-accent/80 to-community/80 rounded-full flex items-center justify-center">
                    <span className="text-white font-display font-bold text-2xl sm:text-3xl lg:text-4xl">12</span>
                  </div>
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