import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AnniversaryBanner from "@/components/AnniversaryBanner";
import ConnectSection from "@/components/ConnectSection";
import SermonSection from "@/components/SermonSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AnniversaryBanner />
      <ConnectSection />
      <SermonSection />
      <Footer />
    </div>
  );
};

export default Index;
