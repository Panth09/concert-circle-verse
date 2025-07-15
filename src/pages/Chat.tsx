import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, Search, MoreVertical, Phone, Video } from "lucide-react";
import Navigation from "@/components/Navigation";

const chats = [
  {
    id: 1,
    name: "Music Lovers United",
    lastMessage: "Can't wait for the concert tonight!",
    time: "2m",
    unread: 3,
    avatar: "/api/placeholder/40/40",
    online: true
  },
  {
    id: 2,
    name: "Sarah Johnson",
    lastMessage: "Did you get the tickets?",
    time: "15m",
    unread: 0,
    avatar: "/api/placeholder/40/40",
    online: true
  },
  {
    id: 3,
    name: "Rock Festival 2024",
    lastMessage: "Lineup announcement coming soon!",
    time: "1h",
    unread: 12,
    avatar: "/api/placeholder/40/40",
    online: false
  },
  {
    id: 4,
    name: "Alex Thompson",
    lastMessage: "Great show last night!",
    time: "3h",
    unread: 0,
    avatar: "/api/placeholder/40/40",
    online: false
  }
];

const messages = [
  {
    id: 1,
    sender: "Sarah Johnson",
    content: "Hey! Are you going to the concert tonight?",
    time: "10:30 AM",
    isOwn: false
  },
  {
    id: 2,
    sender: "You",
    content: "Yes! I'm so excited. Got VIP tickets 🎵",
    time: "10:32 AM",
    isOwn: true
  },
  {
    id: 3,
    sender: "Sarah Johnson",
    content: "That's awesome! Want to meet up beforehand?",
    time: "10:35 AM",
    isOwn: false
  },
  {
    id: 4,
    sender: "You",
    content: "Definitely! How about we meet at the main entrance at 7 PM?",
    time: "10:37 AM",
    isOwn: true
  }
];

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(chats[1]);
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Chat List */}
          <Card className="bg-card border-concert-border shadow-card lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Messages
                <Button size="icon" variant="ghost">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search conversations..."
                  className="pl-10 bg-secondary border-concert-border"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-concert-border">
                {chats.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat)}
                    className={`p-4 cursor-pointer hover:bg-secondary transition-colors ${
                      selectedChat.id === chat.id ? "bg-secondary" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={chat.avatar} />
                          <AvatarFallback>{chat.name[0]}</AvatarFallback>
                        </Avatar>
                        {chat.online && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium truncate">{chat.name}</p>
                          <p className="text-xs text-muted-foreground">{chat.time}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                          {chat.unread > 0 && (
                            <Badge className="bg-primary text-xs ml-2">
                              {chat.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Window */}
          <Card className="bg-card border-concert-border shadow-card lg:col-span-2 flex flex-col">
            {/* Chat Header */}
            <CardHeader className="border-b border-concert-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={selectedChat.avatar} />
                    <AvatarFallback>{selectedChat.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{selectedChat.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedChat.online ? "Online" : "Last seen 1h ago"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="icon" variant="ghost">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Video className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.isOwn
                          ? "bg-gradient-primary text-white"
                          : "bg-secondary text-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.isOwn ? "text-white/70" : "text-muted-foreground"
                        }`}
                      >
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>

            {/* Message Input */}
            <div className="border-t border-concert-border p-4">
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 bg-secondary border-concert-border"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      setNewMessage("");
                    }
                  }}
                />
                <Button 
                  size="icon"
                  className="bg-gradient-primary hover:opacity-90"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;