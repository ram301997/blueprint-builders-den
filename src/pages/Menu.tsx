import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flame, Leaf } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Menu = () => {
  const categories = ["Appetizers", "Main Courses", "Breads", "Desserts", "Beverages"];

  const menuItems = {
    Appetizers: [
      {
        name: "Samosa",
        description: "Crispy pastry filled with spiced potatoes and peas",
        price: "$6.99",
        vegetarian: true,
        spicy: 1,
      },
      {
        name: "Chicken Tikka",
        description: "Marinated chicken pieces grilled to perfection",
        price: "$12.99",
        vegetarian: false,
        spicy: 2,
      },
      {
        name: "Paneer Pakora",
        description: "Cottage cheese fritters with mint chutney",
        price: "$8.99",
        vegetarian: true,
        spicy: 1,
      },
    ],
    "Main Courses": [
      {
        name: "Butter Chicken",
        description: "Tender chicken in creamy tomato sauce",
        price: "$16.99",
        vegetarian: false,
        spicy: 2,
      },
      {
        name: "Lamb Vindaloo",
        description: "Spicy lamb curry with potatoes",
        price: "$18.99",
        vegetarian: false,
        spicy: 3,
      },
      {
        name: "Palak Paneer",
        description: "Cottage cheese in spinach gravy",
        price: "$14.99",
        vegetarian: true,
        spicy: 1,
      },
      {
        name: "Chicken Biryani",
        description: "Fragrant basmati rice with spiced chicken",
        price: "$17.99",
        vegetarian: false,
        spicy: 2,
      },
    ],
    Breads: [
      {
        name: "Naan",
        description: "Traditional Indian flatbread",
        price: "$3.99",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "Garlic Naan",
        description: "Naan topped with garlic and cilantro",
        price: "$4.99",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "Roti",
        description: "Whole wheat flatbread",
        price: "$3.49",
        vegetarian: true,
        spicy: 0,
      },
    ],
    Desserts: [
      {
        name: "Gulab Jamun",
        description: "Sweet milk dumplings in rose syrup",
        price: "$5.99",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "Kulfi",
        description: "Traditional Indian ice cream",
        price: "$6.99",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "Rasmalai",
        description: "Cottage cheese dumplings in sweet milk",
        price: "$6.99",
        vegetarian: true,
        spicy: 0,
      },
    ],
    Beverages: [
      {
        name: "Mango Lassi",
        description: "Yogurt drink with mango",
        price: "$4.99",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "Masala Chai",
        description: "Spiced Indian tea",
        price: "$3.99",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "Sweet Lassi",
        description: "Sweetened yogurt drink",
        price: "$4.49",
        vegetarian: true,
        spicy: 0,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 py-12 px-4">
        <div className="container mx-auto">
          <h1 className="font-playfair text-5xl font-bold text-center mb-4">Our Menu</h1>
          <p className="text-center text-muted-foreground mb-12">
            Authentic Indian dishes prepared with traditional recipes
          </p>

          <Tabs defaultValue="Appetizers" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {menuItems[category as keyof typeof menuItems].map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-playfair text-2xl font-bold">{item.name}</h3>
                          <span className="text-xl font-bold text-primary">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        <div className="flex gap-2">
                          {item.vegetarian && (
                            <Badge variant="secondary" className="gap-1">
                              <Leaf className="h-3 w-3" />
                              Vegetarian
                            </Badge>
                          )}
                          {item.spicy > 0 && (
                            <Badge variant="outline" className="gap-1">
                              {[...Array(item.spicy)].map((_, i) => (
                                <Flame key={i} className="h-3 w-3 text-primary" />
                              ))}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
