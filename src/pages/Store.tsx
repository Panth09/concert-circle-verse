
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Star, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const storeItems = [
  {
    id: 1,
    name: "Concert Circle T-Shirt",
    price: 25.99,
    image: "/api/placeholder/300/300",
    rating: 4.8,
    reviews: 124,
    category: "Apparel"
  },
  {
    id: 2,
    name: "Limited Edition Hoodie",
    price: 49.99,
    image: "/api/placeholder/300/300",
    rating: 4.9,
    reviews: 89,
    category: "Apparel"
  },
  {
    id: 3,
    name: "Concert Poster Collection",
    price: 19.99,
    image: "/api/placeholder/300/300",
    rating: 4.7,
    reviews: 67,
    category: "Collectibles"
  },
];

const Store = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="md:ml-64 pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                Concert Circle Store
              </h1>
              <p className="text-muted-foreground text-lg">
                Discover exclusive merchandise and collectibles
              </p>
            </div>
            
            {/* Cart Button */}
            <Button className="relative bg-gradient-primary" asChild>
              <Link to="/checkout">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Cart ({getTotalItems()})
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white">
                    {getTotalItems()}
                  </Badge>
                )}
              </Link>
            </Button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["All", "Apparel", "Music", "Collectibles", "Accessories", "Bundles"].map((category) => (
              <Badge 
                key={category}
                variant={category === "All" ? "default" : "secondary"}
                className={category === "All" ? "bg-gradient-primary" : ""}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {storeItems.map((item) => (
              <Card key={item.id} className="bg-card border-concert-border shadow-card hover:shadow-glow transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription className="mt-1">
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                      </CardDescription>
                    </div>
                    <span className="text-xl font-bold text-primary">${item.price}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{item.rating}</span>
                      <span className="text-sm text-muted-foreground">({item.reviews})</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                    onClick={() => addToCart(item)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
