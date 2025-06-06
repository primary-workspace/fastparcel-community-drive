
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Package, Truck, Shield, Star, CheckCircle, Clock, ArrowRight, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { user } = useAuth();
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    if (user) {
      window.location.href = '/dashboard';
    }
  }, [user]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Package,
      title: "List Your Order",
      description: "Easily create delivery requests with detailed information and photos",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Truck,
      title: "Community Drivers",
      description: "Connect with trusted community members going your way",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Live Tracking",
      description: "Real-time GPS tracking with Google Maps integration",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Image Verification",
      description: "Photo confirmation for secure pickup and delivery",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Deliveries Made" },
    { number: "2,500+", label: "Active Users" },
    { number: "50+", label: "Cities Covered" },
    { number: "4.9", label: "Average Rating" },
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing service! My package was delivered within 2 hours by a friendly community member.",
      avatar: "photo-1494790108755-2616b612b47c",
      role: "Regular User"
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Love the concept! Earned some extra money by delivering packages on my way to work.",
      avatar: "photo-1507003211169-0a1dd7228f2d",
      role: "Delivery Partner"
    },
    {
      name: "Emma Davis",
      rating: 5,
      comment: "The live tracking feature is fantastic. I could see exactly where my delivery was at all times.",
      avatar: "photo-1438761681033-6461ffad8d80",
      role: "Business Owner"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-nav z-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 animate-scale-in">
              <div className="p-2 bg-gradient-to-r from-primary to-purple-500 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">FastParcel</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-foreground/80 hover:text-primary font-medium transition-all duration-300 hover-scale story-link">Features</a>
              <a href="#about" className="text-foreground/80 hover:text-primary font-medium transition-all duration-300 hover-scale story-link">About</a>
              <a href="#reviews" className="text-foreground/80 hover:text-primary font-medium transition-all duration-300 hover-scale story-link">Reviews</a>
            </div>
            
            <Button 
              onClick={() => window.location.href = '/auth'}
              className="glossy-button px-6 py-2 rounded-full font-medium hover-scale group"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <Badge className="bg-primary/20 text-primary border-primary/20 mb-4 animate-scale-in" style={{ animationDelay: '200ms' }}>
                  <Zap className="h-3 w-3 mr-1" />
                  Community Driven Delivery
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '400ms' }}>
                  Deliver & Earn with 
                  <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent block mt-2">
                    FastParcel
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mt-6 animate-fade-in" style={{ animationDelay: '600ms' }}>
                  Connect with your community for fast, reliable deliveries. List your orders or become a delivery partner and earn while you travel.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '800ms' }}>
                <Button 
                  onClick={() => window.location.href = '/auth'}
                  size="lg" 
                  className="glossy-button px-8 py-4 text-lg hover-scale group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-4 text-lg border-border bg-card/50 hover:bg-card hover-scale"
                >
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 animate-fade-in" style={{ animationDelay: '1000ms' }}>
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: '600ms' }}>
              <div className="relative z-10">
                <div className="glass-card p-8 transform hover:scale-105 transition-all duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=400&fit=crop"
                    alt="Delivery"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="mt-4">
                    <h3 className="font-semibold text-lg">Quick & Reliable</h3>
                    <p className="text-muted-foreground text-sm">Community-powered delivery network</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-transparent to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              How It Works
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Simple Steps to Get Started</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Streamlined process to connect senders with community drivers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`glass-card p-6 hover:shadow-xl transition-all duration-500 hover-scale animate-fade-in ${
                  currentFeature === index ? 'ring-2 ring-primary/50' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            "Connecting Communities, One Delivery at a Time"
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            FastParcel revolutionizes delivery by leveraging the power of community. 
            When neighbors help neighbors, everyone wins. Our platform creates opportunities 
            for extra income while providing fast, reliable delivery services.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-secondary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Testimonials
            </Badge>
            <h2 className="text-4xl font-bold mb-4">What Our Community Says</h2>
            <p className="text-xl text-muted-foreground">Real stories from real users</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="glass-card p-6 hover-scale animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <img 
                      src={`https://images.unsplash.com/${review.avatar}?w=60&h=60&fit=crop&crop=face`}
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center px-4 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">Join thousands of users who trust FastParcel for their delivery needs</p>
          <Button 
            onClick={() => window.location.href = '/auth'}
            size="lg" 
            className="glossy-button px-12 py-4 text-lg hover-scale group"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-card py-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-gradient-to-r from-primary to-purple-500 rounded-lg">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">FastParcel</span>
              </div>
              <p className="text-muted-foreground">Community-driven delivery platform connecting neighbors worldwide.</p>
            </div>
            
            {[
              { title: "Product", links: ["How it Works", "Pricing", "Support"] },
              { title: "Company", links: ["About", "Careers", "Contact"] },
              { title: "Legal", links: ["Privacy", "Terms", "Safety"] }
            ].map((section, index) => (
              <div key={section.title} className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors story-link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground animate-fade-in">
            <p>&copy; 2024 FastParcel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
