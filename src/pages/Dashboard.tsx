
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
  Menu, 
  X, 
  User, 
  Settings, 
  LogOut,
  Plus,
  Clock,
  Truck
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'list-order', label: 'List New Order', icon: Plus },
    { id: 'accept-orders', label: 'Accept Orders', icon: CheckCircle },
    { id: 'live-tracking', label: 'Live Tracking', icon: MapPin },
    { id: 'my-orders', label: 'My Orders', icon: Package },
    { id: 'earnings', label: 'Earnings', icon: TrendingUp },
  ];

  const metrics = [
    { title: 'Active Orders', value: '12', icon: Package, color: 'bg-blue-500' },
    { title: 'Completed', value: '48', icon: CheckCircle, color: 'bg-green-500' },
    { title: 'In Transit', value: '8', icon: Truck, color: 'bg-orange-500' },
    { title: 'This Month Earnings', value: '$340', icon: TrendingUp, color: 'bg-purple-500' },
  ];

  const recentOrders = [
    { id: 'FP001', from: 'Downtown Mall', to: 'Oak Street 123', status: 'In Transit', amount: '$15' },
    { id: 'FP002', from: 'Tech Store', to: 'Pine Avenue 45', status: 'Pending', amount: '$22' },
    { id: 'FP003', from: 'Bookshop', to: 'Main St 78', status: 'Delivered', amount: '$18' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'list-order':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">List New Order</h2>
            </div>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Create Delivery Request</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Pickup Address</label>
                      <input type="text" className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Delivery Address</label>
                      <input type="text" className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Item Description</label>
                    <textarea className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" rows={3}></textarea>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Estimated Value</label>
                      <input type="number" className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Delivery Fee</label>
                      <input type="number" className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Upload Item Photo</label>
                    <input type="file" accept="image/*" className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  
                  <Button className="w-full glossy-button">
                    Create Order
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'accept-orders':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Available Orders</h2>
            </div>
            <div className="grid gap-4">
              {recentOrders.filter(order => order.status === 'Pending').map((order) => (
                <Card key={order.id} className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">Order #{order.id}</h3>
                        <p className="text-muted-foreground">From: {order.from}</p>
                        <p className="text-muted-foreground">To: {order.to}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-400">{order.amount}</p>
                        <Button className="mt-2 glossy-button">
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
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Live Tracking</h2>
            </div>
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="bg-secondary/20 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Google Maps integration will be displayed here</p>
                    <p className="text-sm text-muted-foreground mt-2">Real-time tracking of active deliveries</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      default:
        return (
          <div className="space-y-6">
            {/* Welcome Section */}
            <div className="glass-card rounded-lg p-6 bg-gradient-to-r from-primary/20 to-purple-600/20">
              <h2 className="text-2xl font-bold mb-2">Welcome back, {user?.user_metadata?.full_name || 'User'}!</h2>
              <p className="text-muted-foreground">"Success is not the key to happiness. Happiness is the key to success."</p>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <Card key={index} className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                        <p className="text-3xl font-bold">{metric.value}</p>
                      </div>
                      <div className={`p-3 rounded-full ${metric.color}`}>
                        <metric.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts and Orders */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Pie Chart */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Order Status Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-secondary/20 rounded-lg">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">68%</span>
                      </div>
                      <p className="text-muted-foreground">Pie chart showing order distribution</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Orders */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                        <div>
                          <p className="font-semibold">#{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.from} → {order.to}</p>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant={order.status === 'Delivered' ? 'default' : order.status === 'In Transit' ? 'secondary' : 'outline'}
                          >
                            {order.status}
                          </Badge>
                          <p className="text-sm font-semibold mt-1">{order.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-64' : 'w-16'} glass-card transition-all duration-300 flex-shrink-0 border-r border-border`}>
          <div className="p-4">
            <div className="flex items-center justify-between">
              {sidebarOpen && <span className="text-xl font-bold">FastParcel</span>}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          
          <nav className="mt-8">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-4 py-3 text-left hover:bg-secondary/20 transition-colors ${
                  activeTab === item.id ? 'bg-primary/20 border-r-2 border-primary text-primary' : 'text-foreground/80'
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="glass-nav border-b border-border">
            <div className="flex items-center justify-between px-6 py-4">
              <h1 className="text-2xl font-semibold">Dashboard</h1>
              
              <div className="flex items-center space-x-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage src={user?.user_metadata?.avatar_url} />
                        <AvatarFallback>
                          {user?.user_metadata?.full_name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{user?.user_metadata?.full_name || user?.email}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 glass-card">
                    <DropdownMenuItem>
                      <User className="h-4 w-4 mr-2" />
                      Edit Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={signOut}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
