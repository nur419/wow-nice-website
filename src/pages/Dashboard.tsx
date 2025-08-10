import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { User } from '@supabase/supabase-js';
import { ShoppingBag, Package, Heart, Settings,TrendingUp } from 'lucide-react';

// import { ShoppingBag, Package, Heart, Settings, TrendingUp } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';


import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu  } from "lucide-react";


const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

const [isOpen, setIsOpen] = useState(false);



  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/login');
        return;
      }
      setUser(user);
      setLoading(false);
    };

    getUser();
  }, [navigate]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Signed out successfully');
      navigate('/');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const dashboardCards = [
    {
      title: 'Recent Orders',
      description: 'View your order history and track shipments',
      icon: ShoppingBag,
      count: '3',
      action: 'View Orders'
    },
    {
      title: 'Saved Items',
      description: 'Items you\'ve saved for later',
      icon: Heart,
      count: '12',
      action: 'View Wishlist'
    },
    {
      title: 'Addresses',
      description: 'Manage your delivery addresses',
      icon: Package,
      count: '2',
      action: 'Manage Addresses'
    }
  ];

  const chartData = [
    { month: 'Jan', orders: 12, sales: 2400 },
    { month: 'Feb', orders: 19, sales: 3200 },
    { month: 'Mar', orders: 15, sales: 2800 },
    { month: 'Apr', orders: 25, sales: 4100 },
    { month: 'May', orders: 22, sales: 3800 },
    { month: 'Jun', orders: 30, sales: 4900 },
    { month: 'July', orders: 50, sales: 5500 }
  ];

  const chartConfig = {
    orders: {
      label: 'Orders',
      color: 'hsl(var(--primary))'
    },
    sales: {
      label: 'Sales ($)',
      color: 'hsl(var(--secondary))'
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Welcome back, {user?.email}
            </p>
          </div>

   {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button className="variant-ghost p-2 rounded-full">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[300px] sm:w-[400px]">
          <div className="flex flex-col gap-4 mr-2">
            <Button 
              variant="outline" 
              onClick={() => navigate('/profile')}
              className="flex items-center gap-2"
            >
              <Settings className="w-4 h-4" />
              Profile Settings
            </Button>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
            
          </SheetContent>
        </Sheet>
        {/* biggest devices */}
          <div className="hidden lg:flex gap-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/profile')}
              className="flex items-center gap-2"
            >
              <Settings className="w-4 h-4" />
              Profile Settings
            </Button>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>
         {/* order value */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {dashboardCards.map((card, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {card.title}
                </CardTitle>
                <card.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">{card.count}</div>
                <p className="text-xs text-muted-foreground mb-4">
                  {card.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  {card.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
          
           </div>
       {/* reaharts */}
        <div className="mb-8 container mx-auto px-4 py-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Sales Analytics
              </CardTitle>
              <CardDescription>Order and sales trends over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="orders" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--primary))" }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="sales" 
                      stroke="hsl(var(--secondary))" 
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--secondary))" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
            
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* recent activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest account activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: 'Order placed', item: 'Wireless Headphones', time: '2 hours ago', status: 'processing' },
                  { action: 'Item added to wishlist', item: 'Gaming Laptop', time: '1 day ago', status: 'saved' },
                  { action: 'Address updated', item: 'Home address', time: '3 days ago', status: 'updated' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <p className="font-medium text-sm">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.item}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-1">
                        {activity.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
           {/*quick actions*/}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                <Button variant="outline" onClick={() => navigate('/products')} className="justify-start">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Browse Products
                </Button>
                <Button variant="outline" onClick={() => navigate('/profile')} className="justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Account Settings
                </Button>
                <Button variant="outline" className="justify-start">
                  <Heart className="w-4 h-4 mr-2" />
                  View Wishlist
                </Button>
                <Button variant="outline" className="justify-start">
                  <Package className="w-4 h-4 mr-2" />
                  Track Orders
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;