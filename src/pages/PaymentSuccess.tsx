
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Payment Successful!
              </h1>
              <p className="text-muted-foreground text-lg">
                Thank you for your purchase. Your order has been confirmed.
              </p>
            </div>

            <Card className="bg-card border-concert-border">
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Order Number</span>
                  <span className="font-mono">#CC-2024-001</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Amount</span>
                  <span className="font-bold text-lg">$111.97</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Delivery</span>
                  <span>3-5 business days</span>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:opacity-90">
                <Download className="w-4 h-4 mr-2" />
                Download Receipt
              </Button>
              <Button variant="outline" asChild>
                <Link to="/store">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
