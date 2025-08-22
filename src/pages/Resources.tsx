import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Download, Heart, Shield, Compass, Lightbulb, Flame as Prayer, Star } from "lucide-react";

const Resources = () => {
  const studyGuides = [
    {
      title: "Foundations of Faith",
      category: "New Believer",
      lessons: 8,
      duration: "4 weeks",
      description: "Essential biblical truths for new believers and those wanting to strengthen their foundation in Christ.",
      topics: ["Salvation", "Prayer", "Bible Study", "Church Life"],
      difficulty: "Beginner",
      downloadUrl: "#"
    },
    {
      title: "Walking in God's Grace",
      category: "Spiritual Growth",
      lessons: 12,
      duration: "6 weeks",
      description: "Discover the depth of God's grace and how to live in freedom from guilt and condemnation.",
      topics: ["Grace", "Forgiveness", "Identity in Christ", "Freedom"],
      difficulty: "Intermediate",
      downloadUrl: "#"
    },
    {
      title: "Purpose-Driven Living",
      category: "Life Purpose",
      lessons: 10,
      duration: "5 weeks",
      description: "Uncover your God-given purpose and learn practical steps to fulfill your calling.",
      topics: ["Purpose", "Calling", "Gifts", "Ministry"],
      difficulty: "Intermediate",
      downloadUrl: "#"
    },
    {
      title: "Building Strong Relationships",
      category: "Relationships",
      lessons: 6,
      duration: "3 weeks",
      description: "Biblical principles for healthy relationships in marriage, family, and friendships.",
      topics: ["Communication", "Conflict Resolution", "Love", "Boundaries"],
      difficulty: "Beginner",
      downloadUrl: "#"
    },
    {
      title: "Financial Stewardship",
      category: "Stewardship",
      lessons: 8,
      duration: "4 weeks",
      description: "Learn biblical principles of money management, giving, and financial responsibility.",
      topics: ["Tithing", "Budgeting", "Debt", "Generosity"],
      difficulty: "Beginner",
      downloadUrl: "#"
    },
    {
      title: "Leadership in the Kingdom",
      category: "Leadership",
      lessons: 15,
      duration: "8 weeks",
      description: "Develop Christ-centered leadership skills for ministry and everyday life.",
      topics: ["Servant Leadership", "Vision", "Team Building", "Influence"],
      difficulty: "Advanced",
      downloadUrl: "#"
    }
  ];

  const prayerDeclarations = [
    {
      title: "Daily Strength & Protection",
      category: "Daily Life",
      description: "Powerful declarations for God's strength, protection, and guidance in your daily walk.",
      verses: ["Psalm 91", "Ephesians 6:10-18", "Isaiah 41:10"],
      icon: Shield
    },
    {
      title: "Identity in Christ",
      category: "Identity",
      description: "Affirm your identity as a beloved child of God with these transformative declarations.",
      verses: ["2 Corinthians 5:17", "1 Peter 2:9", "Romans 8:1"],
      icon: Star
    },
    {
      title: "Breakthrough & Victory",
      category: "Breakthrough",
      description: "Declare God's victory over challenges, obstacles, and spiritual battles.",
      verses: ["1 Corinthians 15:57", "2 Corinthians 2:14", "Romans 8:37"],
      icon: Compass
    },
    {
      title: "Healing & Restoration",
      category: "Healing",
      description: "Speak God's healing power over your body, mind, and spirit.",
      verses: ["Isaiah 53:5", "Jeremiah 30:17", "3 John 1:2"],
      icon: Heart
    },
    {
      title: "Wisdom & Guidance",
      category: "Wisdom",
      description: "Pray for divine wisdom and clear direction in life's decisions.",
      verses: ["James 1:5", "Proverbs 3:5-6", "Psalm 32:8"],
      icon: Lightbulb
    },
    {
      title: "Peace & Rest",
      category: "Peace",
      description: "Find God's perfect peace and rest in the midst of life's storms.",
      verses: ["Philippians 4:7", "Matthew 11:28-30", "Isaiah 26:3"],
      icon: Prayer
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500 text-white";
      case "Intermediate": return "bg-blue-500 text-white";
      case "Advanced": return "bg-purple-500 text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = [
      "bg-accent text-accent-foreground",
      "bg-blue-500 text-white",
      "bg-green-500 text-white",
      "bg-purple-500 text-white",
      "bg-pink-500 text-white",
      "bg-orange-500 text-white"
    ];
    return colors[Math.abs(category.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % colors.length];
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary-light to-primary-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Spiritual <span className="font-display text-accent text-elegant">Resources</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Grow in your faith with our collection of study guides, prayer declarations, and spiritual tools.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Study Guides */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Study <span className="text-elegant">Guides</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deepen your understanding of God's Word with our comprehensive study guides designed for personal or group study.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studyGuides.map((guide, index) => (
              <Card key={guide.title} className="card-3d animate-slide-up group" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className={getCategoryColor(guide.category)}>
                      {guide.category}
                    </Badge>
                    <Badge className={getDifficultyColor(guide.difficulty)}>
                      {guide.difficulty}
                    </Badge>
                  </div>
                  
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:animate-glow">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {guide.title}
                  </h3>
                  
                  <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                    <span>{guide.lessons} lessons</span>
                    <span>•</span>
                    <span>{guide.duration}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {guide.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Topics covered:</p>
                    <div className="flex flex-wrap gap-1">
                      {guide.topics.map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="btn-hero btn-hover-lift flex-1">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline" className="btn-hover-lift">
                      Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prayer Declarations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Prayer <span className="text-elegant">Declarations</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strengthen your prayer life with biblical declarations that align your heart with God's truth and promises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prayerDeclarations.map((declaration, index) => (
              <Card key={declaration.title} className="card-3d animate-slide-up group" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <Badge className={getCategoryColor(declaration.category)} variant="outline">
                    {declaration.category}
                  </Badge>
                  
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center my-4 mx-auto group-hover:animate-glow">
                    <declaration.icon className="h-8 w-8 text-accent" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-card-foreground mb-3 text-center">
                    {declaration.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-center">
                    {declaration.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2 text-center">Key verses:</p>
                    <div className="flex flex-wrap justify-center gap-1">
                      {declaration.verses.map((verse) => (
                        <Badge key={verse} variant="outline" className="text-xs">
                          {verse}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="btn-hero btn-hover-lift flex-1">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline" className="btn-hover-lift">
                      Read
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Additional <span className="text-elegant">Resources</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              More spiritual growth materials are being added regularly to support your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Devotionals",
                description: "Daily readings and reflections to start your day with God's Word.",
                status: "Coming Soon",
                icon: BookOpen
              },
              {
                title: "Scripture Cards",
                description: "Printable memory verse cards for meditation and memorization.",
                status: "Available",
                icon: Star
              },
              {
                title: "Worship Playlists",
                description: "Curated music collections to enhance your personal worship time.",
                status: "Coming Soon",
                icon: Heart
              },
              {
                title: "Small Group Tools",
                description: "Discussion guides and activities for life group leaders.",
                status: "Available",
                icon: Compass
              }
            ].map((resource, index) => (
              <Card key={resource.title} className="card-3d animate-slide-up text-center" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {resource.title}
                  </h3>
                  <Badge 
                    variant={resource.status === "Available" ? "default" : "outline"} 
                    className="mb-3"
                  >
                    {resource.status}
                  </Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {resource.description}
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
              Request <span className="font-display text-accent text-elegant">Resources</span>
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Have a specific topic you'd like us to create resources for? Let us know how we can support your spiritual growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="btn-hover-lift">
                Request a Resource
              </Button>
              <Button size="lg" variant="outline" className="btn-hover-lift border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;