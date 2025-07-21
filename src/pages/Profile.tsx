
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  CreditCard, 
  LogOut, 
  Camera, 
  Music, 
  Calendar,
  Heart,
  Share2,
  Edit3,
  Crown,
  Globe,
  Moon,
  HelpCircle,
  UserPlus,
  ChevronRight
} from "lucide-react";
import Navigation from "@/components/Navigation";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [userName, setUserName] = useState('USERNAME');
  const [userPhone, setUserPhone] = useState('+91 1234567899');
  const [userBio, setUserBio] = useState('Music enthusiast who loves discovering new artists and attending live concerts.');
  const [darkMode, setDarkMode] = useState(true);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: 'Visa', last4: '4242', expiry: '12/26' },
    { id: 2, type: 'Mastercard', last4: '8888', expiry: '08/27' }
  ]);

  const userStats = [
    { label: "Events Attended", value: 42 },
    { label: "Communities Joined", value: 8 },
    { label: "Posts Shared", value: 156 },
    { label: "Following", value: 234 }
  ];

  const recentActivity = [
    {
      id: 1,
      type: "event",
      title: "Attended Electronic Paradise Festival",
      date: "2 days ago",
      icon: Music
    },
    {
      id: 2,
      type: "post",
      title: "Shared a new vibe in Community",
      date: "1 week ago",
      icon: Share2
    },
    {
      id: 3,
      type: "favorite",
      title: "Added 3 events to favorites",
      date: "2 weeks ago",
      icon: Heart
    }
  ];

  const handleMenuClick = (item: string) => {
    console.log(`Clicked: ${item}`);

    switch (item) {
      case 'Premium':
        setActiveTab('premium');
        break;
      case 'Payment Methods':
        setActiveTab('payments');
        break;
      case 'Profile':
        setShowEditProfile(true);
        break;
      case 'Notifications':
        setActiveTab('notifications');
        break;
      case 'Language':
        setActiveTab('settings');
        break;
      case 'Help Center':
        setActiveTab('help');
        break;
      case 'Invite Friends':
        setActiveTab('invite');
        break;
      case 'Logout':
        if (window.confirm('Are you sure you want to logout?')) {
          localStorage.clear();
          window.location.href = '/login';
        }
        break;
      default:
        break;
    }
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    console.log('Dark mode toggled:', !darkMode);
  };

  const handleEditProfile = () => {
    setShowEditProfile(true);
  };

  const handleSaveProfile = () => {
    setShowEditProfile(false);
    alert('Profile updated successfully!');
  };

  const menuItems = [
    { icon: User, label: 'Profile', hasChevron: true },
    { icon: Bell, label: 'Notifications', hasChevron: true },
    { icon: Globe, label: 'Language', hasChevron: true },
    { icon: Moon, label: 'Dark Mode', hasChevron: false, isToggle: true },
    { icon: HelpCircle, label: 'Help Center', hasChevron: true },
    { icon: UserPlus, label: 'Invite Friends', hasChevron: true },
    { icon: LogOut, label: 'Logout', hasChevron: false, isLogout: true },
  ];

  if (showEditProfile) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="p-6">
          <div className="container mx-auto max-w-2xl">
            <div className="flex items-center justify-between mb-8">
              <Button 
                variant="ghost"
                onClick={() => setShowEditProfile(false)}
                className="text-primary hover:text-primary/80"
              >
                ← Back
              </Button>
              <h1 className="text-xl font-semibold">Edit Profile</h1>
              <div></div>
            </div>

            <Card className="bg-card border-concert-border">
              <CardContent className="p-6 space-y-6">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src="/src/assets/concert-hero-1.jpg" />
                      <AvatarFallback className="bg-gradient-primary text-white text-2xl">
                        {userName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <Button 
                      size="sm"
                      className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full p-0"
                    >
                      <Edit3 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="bg-card border-concert-border"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      className="bg-card border-concert-border"
                    />
                  </div>

                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={userBio}
                      onChange={(e) => setUserBio(e.target.value)}
                      placeholder="Tell us about your music taste..."
                      rows={4}
                      className="bg-card border-concert-border"
                    />
                  </div>
                </div>

                <Button
                  onClick={handleSaveProfile}
                  className="w-full bg-gradient-primary text-white"
                >
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="p-6">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Profile
            </h1>
            <p className="text-muted-foreground">
              Manage your account and preferences
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Settings
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Privacy
              </TabsTrigger>
              <TabsTrigger value="premium" className="flex items-center gap-2">
                <Crown className="w-4 h-4" />
                Premium
              </TabsTrigger>
              <TabsTrigger value="payments" className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Payments
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="md:col-span-2 bg-card border-concert-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Profile Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src="/src/assets/concert-hero-1.jpg" />
                        <AvatarFallback className="bg-gradient-primary text-white text-xl">
                          {userName.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold">{userName}</h2>
                        <p className="text-muted-foreground">{userPhone}</p>
                        <p className="text-sm text-muted-foreground">{userBio}</p>
                      </div>
                      <Button 
                        variant="outline" 
                        onClick={handleEditProfile}
                        className="border-concert-border"
                      >
                        <Edit3 className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Music Preferences</Label>
                      <div className="flex flex-wrap gap-2">
                        {["Electronic", "House", "Techno", "Progressive", "Ambient"].map((genre) => (
                          <Badge key={genre} variant="secondary">{genre}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="bg-card border-concert-border">
                    <CardHeader>
                      <CardTitle className="text-lg">Stats</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        {userStats.map((stat) => (
                          <div key={stat.label} className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">{stat.label}</span>
                            <span className="font-bold text-primary">{stat.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-concert-border">
                    <CardHeader>
                      <CardTitle className="text-lg">Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {recentActivity.map((activity) => (
                          <div key={activity.id} className="flex items-start gap-3">
                            <activity.icon className="w-4 h-4 mt-1 text-primary" />
                            <div>
                              <p className="text-sm font-medium">{activity.title}</p>
                              <p className="text-xs text-muted-foreground">{activity.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Premium Section */}
              <Card 
                className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-indigo-500/40 cursor-pointer hover:from-indigo-600/30 hover:to-purple-600/30 transition-all duration-300"
                onClick={() => handleMenuClick('Premium')}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Crown className="w-6 h-6 text-yellow-400" />
                    <div>
                      <h3 className="font-bold text-lg">Premium</h3>
                      <p className="text-sm text-muted-foreground">Unlock exclusive concert experiences</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground ml-auto" />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card 
                className="bg-card border-concert-border cursor-pointer hover:bg-muted/50 transition-all duration-300"
                onClick={() => handleMenuClick('Payment Methods')}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <div>
                      <h3 className="font-semibold">Payment Methods</h3>
                      <p className="text-sm text-muted-foreground">Manage your payment options</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground ml-auto" />
                  </div>
                </CardContent>
              </Card>

              {/* Menu Items */}
              <div className="space-y-2">
                {menuItems.map((item, index) => (
                  <Card
                    key={index}
                    className={`cursor-pointer transition-all duration-300 ${
                      item.isLogout 
                        ? 'border-red-500/20 hover:bg-red-500/10' 
                        : 'bg-card border-concert-border hover:bg-muted/50'
                    }`}
                    onClick={() => item.isToggle ? handleDarkModeToggle() : handleMenuClick(item.label)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <item.icon className={`w-5 h-5 ${item.isLogout ? 'text-red-500' : ''}`} />
                          <span className={`font-medium ${item.isLogout ? 'text-red-500' : ''}`}>
                            {item.label}
                          </span>
                        </div>
                        {item.isToggle ? (
                          <Switch checked={darkMode} />
                        ) : item.hasChevron ? (
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        ) : null}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card className="bg-card border-concert-border">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <select className="w-full p-2 bg-card border border-concert-border rounded-lg">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <select className="w-full p-2 bg-card border border-concert-border rounded-lg">
                      <option>UTC-5 (EST)</option>
                      <option>UTC-8 (PST)</option>
                      <option>UTC+0 (GMT)</option>
                      <option>UTC+1 (CET)</option>
                    </select>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                    </div>
                    <Switch 
                      checked={twoFactorAuth} 
                      onCheckedChange={setTwoFactorAuth}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive updates via email</p>
                    </div>
                    <Switch 
                      checked={emailNotifications} 
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>
                  
                  <Button className="bg-gradient-primary text-white">Save Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <Card className="bg-card border-concert-border">
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Choose what notifications you want to receive</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { 
                      title: "New Events", 
                      desc: "Get notified about new events in your area",
                      checked: pushNotifications,
                      onChange: setPushNotifications
                    },
                    { 
                      title: "Community Updates", 
                      desc: "Updates from communities you've joined",
                      checked: emailNotifications,
                      onChange: setEmailNotifications
                    },
                    { 
                      title: "Friend Activity", 
                      desc: "When friends share new content",
                      checked: true,
                      onChange: () => {}
                    },
                    { 
                      title: "Marketing Emails", 
                      desc: "Promotional content and special offers",
                      checked: marketingEmails,
                      onChange: setMarketingEmails
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <Label>{item.title}</Label>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <Switch 
                        checked={item.checked} 
                        onCheckedChange={item.onChange}
                      />
                    </div>
                  ))}
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label>Notification Frequency</Label>
                    <select className="w-full p-2 bg-card border border-concert-border rounded-lg">
                      <option>Real-time</option>
                      <option>Daily digest</option>
                      <option>Weekly summary</option>
                    </select>
                  </div>
                  
                  <Button className="bg-gradient-primary text-white">Save Preferences</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-6">
              <Card className="bg-card border-concert-border">
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>Control your privacy and data sharing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: "Profile Visibility", desc: "Make your profile visible to others" },
                    { title: "Activity Status", desc: "Show when you're online" },
                    { title: "Event History", desc: "Allow others to see events you've attended" },
                    { title: "Location Sharing", desc: "Share your location for event recommendations" },
                    { title: "Data Analytics", desc: "Help improve the app with usage data" }
                  ].map((privacy) => (
                    <div key={privacy.title} className="flex items-center justify-between">
                      <div>
                        <Label>{privacy.title}</Label>
                        <p className="text-sm text-muted-foreground">{privacy.desc}</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  ))}
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full border-concert-border">
                      Download My Data
                    </Button>
                    <Button variant="outline" className="w-full border-red-500 text-red-500 hover:bg-red-50">
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="premium" className="space-y-6">
              <Card className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-indigo-500/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Crown className="w-6 h-6 text-yellow-400" />
                    Premium Subscription
                  </CardTitle>
                  <CardDescription>
                    Unlock exclusive features and priority access to concerts
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Priority concert ticket access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Exclusive backstage content</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>VIP community access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Advanced event planning tools</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-primary text-white">
                    Upgrade to Premium - $9.99/month
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payments" className="space-y-6">
              <Card className="bg-card border-concert-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Payment Methods
                  </CardTitle>
                  <CardDescription>Manage your saved payment methods</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="flex items-center justify-between p-4 border border-concert-border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded flex items-center justify-center ${
                            method.type === 'Visa' ? 'bg-blue-600' : 'bg-orange-600'
                          }`}>
                            <CreditCard className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-medium">•••• •••• •••• {method.last4}</p>
                            <p className="text-sm text-muted-foreground">Expires {method.expiry}</p>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setPaymentMethods(prev => prev.filter(p => p.id !== method.id))}
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-gradient-primary text-white"
                    onClick={() => {
                      const newMethod = {
                        id: Date.now(),
                        type: 'Visa',
                        last4: '1234',
                        expiry: '04/28'
                      };
                      setPaymentMethods(prev => [...prev, newMethod]);
                    }}
                  >
                    Add New Payment Method
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
