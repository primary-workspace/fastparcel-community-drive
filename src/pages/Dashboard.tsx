
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Package, 
  CheckCircle, 
  MapPin, 
  TrendingUp, 
  User, 
  Settings, 
  LogOut,
  Plus,
  Truck,
  DollarSign,
  Activity,
  Clock,
  Star,
  ArrowUpRight,
  Calendar,
  Bell
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";
import OrderChart from "@/components/charts/OrderChart";
import EarningsChart from "@/components/charts/EarningsChart";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  const sidebarItems = [
    { id: 'dashboard', label: 'Overview', icon: TrendingUp },
    { id: 'list-order', label: 'Create Order', icon: Plus },
    { id: 'accept-orders', label: 'Available Orders', icon: Package },
    { id: 'live-tracking', label: 'Live Tracking', icon: MapPin },
    { id: 'my-orders', label: 'My Orders', icon: Clock },
    { id: 'earnings', label: 'Earnings', icon: DollarSign },
  ];

  const metrics = [
    { 
      title: 'Active Orders', 
      value: '12', 
      icon: Package, 
      color: 'from-blue-500 to-blue-600', 
      change: '+12%',
      trend: 'up'
    },
    { 
      title: 'Completed Today', 
      value: '8', 
      icon: CheckCircle, 
      color: 'from-green-500 to-green-600', 
      change: '+8%',
      trend: 'up'
    },
    { 
      title: 'In Transit', 
      value: '4', 
      icon: Truck, 
      color: 'from-orange-500 to-orange-600', 
      change: '+3%',
      trend: 'up'
    },
    { 
      title: 'Today\'s Earnings', 
      value: '$240', 
      icon: DollarSign, 
      color: 'from-purple-500 to-purple-600', 
      change: '+15%',
      trend: 'up'
    },
  ];

  const recentOrders = [
    { id: 'FP001', from: 'Downtown Mall', to: 'Oak Street 123', status: 'In Transit', amount: '$15', time: '2 hours ago', priority: 'High' },
    { id: 'FP002', from: 'Tech Store', to: 'Pine Avenue 45', status: 'Pending', amount: '$22', time: '4 hours ago', priority: 'Normal' },
    { id: 'FP003', from: 'Bookshop', to: 'Main St 78', status: 'Delivered', amount: '$18', time: '6 hours ago', priority: 'Normal' },
    { id: 'FP004', from: 'Restaurant Plaza', to: 'Cedar Lane 90', status: 'Pending', amount: '$25', time: '1 hour ago', priority: 'High' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'list-order':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Create New Order</h2>
                <p className="text-muted-foreground mt-1">List a new delivery request for pickup</p>
              </div>
            </div>
            <Card className="glass-card border-border/50">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5 text-primary" />
                  Order Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">Pickup Address</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all" 
                        placeholder="Enter pickup location"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">Delivery Address</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all" 
                        placeholder="Enter delivery location"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Item Description</label>
                    <textarea 
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all" 
                      rows={3}
                      placeholder="Describe the item to be delivered"
                    ></textarea>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">Estimated Value</label>
                      <input 
                        type="number" 
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all" 
                        placeholder="$0.00"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">Delivery Fee</label>
                      <input 
                        type="number" 
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all" 
                        placeholder="$0.00"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">Priority</label>
                      <select className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all">
                        <option>Normal</option>
                        <option>High</option>
                        <option>Urgent</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Upload Item Photo</label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
                      <input type="file" accept="image/*" className="hidden" id="file-upload" />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <div className="text-muted-foreground">
                          <Package className="h-8 w-8 mx-auto mb-2" />
                          <p>Click to upload or drag and drop</p>
                          <p className="text-sm">PNG, JPG up to 10MB</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 py-3">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Order
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'accept-orders':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Available Orders</h2>
                <p className="text-muted-foreground mt-1">Browse and accept delivery requests</p>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Notifications
              </Button>
            </div>
            <div className="grid gap-4">
              {recentOrders.filter(order => order.status === 'Pending').map((order, index) => (
                <Card key={order.id} className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 group" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold text-lg">Order #{order.id}</h3>
                          <Badge variant={order.priority === 'High' ? 'destructive' : 'secondary'} className="text-xs">
                            {order.priority}
                          </Badge>
                        </div>
                        <div className="space-y-1 text-muted-foreground">
                          <p className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            From: {order.from}
                          </p>
                          <p className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-purple-400" />
                            To: {order.to}
                          </p>
                          <p className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4" />
                            {order.time}
                          </p>
                        </div>
                      </div>
                      <div className="text-right space-y-3">
                        <p className="text-2xl font-bold text-green-400">{order.amount}</p>
                        <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300 group-hover:scale-105">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Accept Order
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      
      case 'live-tracking':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Live Tracking</h2>
                <p className="text-muted-foreground mt-1">Real-time delivery tracking</p>
              </div>
            </div>
            <Card className="glass-card border-border/50">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-secondary/20 to-primary/10 rounded-xl h-96 flex items-center justify-center border border-border/30">
                  <div className="text-center space-y-4">
                    <div className="relative">
                      <MapPin className="h-20 w-20 text-primary mx-auto animate-pulse" />
                      <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                    </div>
                    <div>
                      <p className="text-lg font-medium">Interactive Map Coming Soon</p>
                      <p className="text-muted-foreground">Real-time tracking of active deliveries</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'my-orders':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">My Orders</h2>
                <p className="text-muted-foreground mt-1">Track your order history and status</p>
              </div>
            </div>
            <div className="grid gap-4">
              {recentOrders.map((order, index) => (
                <Card key={order.id} className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold text-lg">#{order.id}</h3>
                          <Badge 
                            variant={order.status === 'Delivered' ? 'default' : order.status === 'In Transit' ? 'secondary' : 'outline'}
                            className="text-xs"
                          >
                            {order.status}
                          </Badge>
                        </div>
                        <div className="space-y-1 text-muted-foreground">
                          <p>{order.from} → {order.to}</p>
                          <p className="text-sm flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {order.time}
                          </p>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="text-xl font-bold text-green-400">{order.amount}</p>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'earnings':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Earnings Overview</h2>
                <p className="text-muted-foreground mt-1">Track your income and performance</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  This Month
                </Button>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Monthly Earnings Trend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <EarningsChart />
                </CardContent>
              </Card>
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-400" />
                    Earnings Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-lg border border-green-500/20">
                      <span className="font-medium">Delivery Fees</span>
                      <span className="font-bold text-green-400 text-lg">$980</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-lg border border-blue-500/20">
                      <span className="font-medium">Tips</span>
                      <span className="font-bold text-blue-400 text-lg">$160</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-lg border border-purple-500/20">
                      <span className="font-medium">Bonuses</span>
                      <span className="font-bold text-purple-400 text-lg">$100</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="space-y-8 animate-fade-in">
            {/* Welcome Section */}
            <div className="glass-card rounded-xl p-8 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 border border-primary/20 animate-scale-in">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                    Welcome back, {user?.user_metadata?.full_name || 'User'}!
                  </h2>
                  <p className="text-muted-foreground text-lg">Ready to make some deliveries today?</p>
                </div>
                <div className="hidden md:flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Today's Rating</p>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold">4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <Card key={index} className="glass-card border-border/50 hover:border-primary/50 hover:scale-105 transition-all duration-300 group" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">{metric.title}</p>
                        <p className="text-3xl font-bold mb-2">{metric.value}</p>
                        <div className="flex items-center gap-1">
                          <ArrowUpRight className="h-3 w-3 text-green-400" />
                          <span className="text-sm text-green-400 font-medium">{metric.change}</span>
                        </div>
                      </div>
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${metric.color} group-hover:scale-110 transition-transform duration-300`}>
                        <metric.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts and Orders */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Order Status Chart */}
              <Card className="glass-card border-border/50 lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    Order Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <OrderChart />
                </CardContent>
              </Card>

              {/* Recent Orders */}
              <Card className="glass-card border-border/50 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-primary" />
                      Recent Orders
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      View All
                      <ArrowUpRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.slice(0, 4).map((order, index) => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-all duration-300 border border-border/30" style={{ animationDelay: `${index * 50}ms` }}>
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-lg ${
                            order.status === 'Delivered' ? 'bg-green-500/20 text-green-400' :
                            order.status === 'In Transit' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {order.status === 'Delivered' ? <CheckCircle className="h-4 w-4" /> :
                             order.status === 'In Transit' ? <Truck className="h-4 w-4" /> :
                             <Clock className="h-4 w-4" />}
                          </div>
                          <div>
                            <p className="font-semibold">#{order.id}</p>
                            <p className="text-sm text-muted-foreground">{order.from} → {order.to}</p>
                            <p className="text-xs text-muted-foreground">{order.time}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant={order.status === 'Delivered' ? 'default' : order.status === 'In Transit' ? 'secondary' : 'outline'}
                            className="mb-1"
                          >
                            {order.status}
                          </Badge>
                          <p className="text-sm font-semibold text-green-400">{order.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button onClick={() => setActiveTab('list-order')} className="h-20 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300">
                    <div className="text-center">
                      <Plus className="h-6 w-6 mx-auto mb-1" />
                      <span>Create Order</span>
                    </div>
                  </Button>
                  <Button onClick={() => setActiveTab('accept-orders')} variant="outline" className="h-20 border-green-500/30 hover:bg-green-500/10 transition-all duration-300">
                    <div className="text-center">
                      <Package className="h-6 w-6 mx-auto mb-1 text-green-400" />
                      <span>Browse Orders</span>
                    </div>
                  </Button>
                  <Button onClick={() => setActiveTab('live-tracking')} variant="outline" className="h-20 border-orange-500/30 hover:bg-orange-500/10 transition-all duration-300">
                    <div className="text-center">
                      <MapPin className="h-6 w-6 mx-auto mb-1 text-orange-400" />
                      <span>Track Orders</span>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 glass-card border-r border-border/50 min-h-screen">
            <div className="p-6 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-primary to-purple-600 rounded-xl">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">FastParcel</span>
              </div>
            </div>
            
            <nav className="p-4 space-y-2">
              {sidebarItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                    activeTab === item.id 
                      ? 'bg-gradient-to-r from-primary/20 to-purple-600/20 text-primary border border-primary/30' 
                      : 'text-foreground/70 hover:text-foreground hover:bg-secondary/20'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <header className="glass-nav border-b border-border/50 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold">Dashboard</h1>
                  <p className="text-muted-foreground">Manage your deliveries efficiently</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                  </Button>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center gap-3 hover:bg-secondary/20 transition-colors">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user?.user_metadata?.avatar_url} />
                          <AvatarFallback className="bg-gradient-to-r from-primary to-purple-600 text-white">
                            {user?.user_metadata?.full_name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left hidden md:block">
                          <p className="font-medium text-sm">{user?.user_metadata?.full_name || user?.email}</p>
                          <p className="text-xs text-muted-foreground">Delivery Partner</p>
                        </div>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 glass-card border-border/50">
                      <DropdownMenuItem onClick={() => window.location.href = '/profile'}>
                        <User className="h-4 w-4 mr-2" />
                        Edit Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => window.location.href = '/settings'}>
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={signOut} className="text-red-400">
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </header>

            {/* Page Content */}
            <main className="flex-1 p-6 overflow-auto">
              {renderContent()}
            </main>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
