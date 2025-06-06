
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Package, Truck, Shield, Star, CheckCircle, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { user } = useAuth();

  useEffect(() => {
    // Redirect to dashboard if already logged in
    if (user) {
      window.location.href = '/dashboard';
    }
  }, [user]);

  const features = [
    {
      icon: Package,
      title: "List Your Order",
      description: "Easily create delivery requests with detailed information and photos"
    },
    {
      icon: Truck,
      title: "Community Drivers",
      description: "Connect with trusted community members going your way"
    },
    {
      icon: MapPin,
      title: "Live Tracking",
      description: "Real-time GPS tracking with Google Maps integration"
    },
    {
      icon: Shield,
      title: "Image Verification",
      description: "Photo confirmation for secure pickup and delivery"
    }
  ];

  const galleryImages = [
    "photo-1649972904349-6e44c42644a7",
    "photo-1581091226825-a6a2a5aee158", 
    "photo-1531297484001-80022131f5a1",
    "photo-1605810230434-7631ac76ec81",
    "photo-1519389950473-47ba0277781c",
    "photo-1581092795360-fd1ca04f0952"
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing service! My package was delivered within 2 hours by a friendly community member.",
      avatar: "photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Love the concept! Earned some extra money by delivering packages on my way to work.",
      avatar: "photo-1581091226825-a6a2a5aee158"
    },
    {
      name: "Emma Davis",
      rating: 5,
      comment: "The live tracking feature is fantastic. I could see exactly where my delivery was at all times.",
      avatar: "photo-1531297484001-80022131f5a1"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-nav z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">FastParcel</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-foreground/80 hover:text-primary font-medium transition-colors">Features</a>
              <a href="#gallery" className="text-foreground/80 hover:text-primary font-medium transition-colors">Gallery</a>
              <a href="#reviews" className="text-foreground/80 hover:text-primary font-medium transition-colors">Reviews</a>
            </div>
            
            <Button 
              onClick={() => window.location.href = '/auth'}
              className="glossy-button px-6 py-2 rounded-full font-medium"
            >
              Try Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-primary/20 text-primary border-primary/20 mb-4">Community Driven Delivery</Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Deliver & Earn with 
                  <span className="text-primary"> FastParcel</span>
                </h1>
                <p className="text-xl text-muted-foreground mt-6">
                  Connect with your community for fast, reliable deliveries. List your orders or become a delivery partner and earn while you travel.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.location.href = '/auth'}
                  size="lg" 
                  className="glossy-button px-8 py-3"
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-3 border-border bg-card/50 hover:bg-card"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-card p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=400&fit=crop"
                  alt="Delivery"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-4">
                  <h3 className="font-semibold">Quick & Reliable</h3>
                  <p className="text-muted-foreground text-sm">Community-powered delivery network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            "Connecting Communities, One Delivery at a Time"
          </h2>
          <p className="text-xl text-muted-foreground">
            FastParcel revolutionizes delivery by leveraging the power of community. 
            When neighbors help neighbors, everyone wins.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Simple steps to get your items delivered or start earning</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Community in Action</h2>
            <p className="text-xl text-muted-foreground">See how FastParcel is making a difference</p>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="break-inside-avoid">
                <img 
                  src={`https://images.unsplash.com/${image}?w=400&h=${300 + (index % 3) * 100}&fit=crop`}
                  alt={`Gallery ${index + 1}`}
                  className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow glass-card"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Community Says</h2>
            <p className="text-xl text-muted-foreground">Real stories from real users</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="glass-card p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <img 
                      src={`https://images.unsplash.com/${review.avatar}?w=60&h=60&fit=crop&crop=face`}
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Truck className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">FastParcel</span>
              </div>
              <p className="text-muted-foreground">Community-driven delivery platform connecting neighbors worldwide.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Safety</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 FastParcel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
