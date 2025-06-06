
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, MapPin, User, Clock, CheckCircle, Star, Package, Truck, Shield } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [showSignup, setShowSignup] = useState(false);

  const features = [
    {
      icon: Package,
      title: "List Your Order",
      description: "Easily create delivery requests with detailed information and photos"
    },
    {
      icon: User,
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

  if (showSignup) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Join FastParcel</h2>
              <p className="text-gray-600">Start your delivery journey today</p>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              window.location.href = '/dashboard';
            }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Create Account
              </Button>
            </form>
            
            <div className="mt-4 text-center">
              <button 
                onClick={() => setShowSignup(false)}
                className="text-blue-600 hover:text-blue-700 text-sm"
              >
                Back to home
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">FastParcel</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Features</a>
              <a href="#gallery" className="text-gray-700 hover:text-blue-600 font-medium">Gallery</a>
              <a href="#reviews" className="text-gray-700 hover:text-blue-600 font-medium">Reviews</a>
            </div>
            
            <Button 
              onClick={() => setShowSignup(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium"
            >
              Try Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-blue-100 text-blue-800 mb-4">Community Driven Delivery</Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Deliver & Earn with 
                  <span className="text-blue-600"> FastParcel</span>
                </h1>
                <p className="text-xl text-gray-600 mt-6">
                  Connect with your community for fast, reliable deliveries. List your orders or become a delivery partner and earn while you travel.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setShowSignup(true)}
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=400&fit=crop"
                  alt="Delivery"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-4">
                  <h3 className="font-semibold text-gray-900">Quick & Reliable</h3>
                  <p className="text-gray-600 text-sm">Community-powered delivery network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            "Connecting Communities, One Delivery at a Time"
          </h2>
          <p className="text-xl text-gray-600">
            FastParcel revolutionizes delivery by leveraging the power of community. 
            When neighbors help neighbors, everyone wins.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get your items delivered or start earning</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Community in Action</h2>
            <p className="text-xl text-gray-600">See how FastParcel is making a difference</p>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="break-inside-avoid">
                <img 
                  src={`https://images.unsplash.com/${image}?w=400&h=${300 + (index % 3) * 100}&fit=crop`}
                  alt={`Gallery ${index + 1}`}
                  className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
            <p className="text-xl text-gray-600">Real stories from real users</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <img 
                      src={`https://images.unsplash.com/${review.avatar}?w=60&h=60&fit=crop&crop=face`}
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Truck className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">FastParcel</span>
              </div>
              <p className="text-gray-400">Community-driven delivery platform connecting neighbors worldwide.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">How it Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Safety</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FastParcel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
