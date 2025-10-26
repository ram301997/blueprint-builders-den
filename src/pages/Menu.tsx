import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flame, Leaf } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Menu = () => {
  const categories = ["Appetizers", "Main Courses", "Vegetable Dishes", "Breads", "Desserts", "Beverages"];

  const menuItems = {
    Appetizers: [
      {
        name: "Samosa (3pcs)",
        description: "Crispy pastry filled with spiced potatoes and peas",
        price: "$8.99",
        vegetarian: true,
        spicy: 1,
      },
      {
        name: "Cauliflower Gobi Wings",
        description: "Broken samosa mixed with chickpeas & chutneys",
        price: "$17.99",
        vegetarian: true,
        spicy: 2,
      },
      {
        name: "Chicken Wings",
        description: "Tandoori-spiced chicken wings",
        price: "$17.99",
        vegetarian: false,
        spicy: 2,
      },
      {
        name: "Chicken Pakora",
        description: "Chicken fritters with aromatic spices",
        price: "$17.99",
        vegetarian: false,
        spicy: 2,
      },
      {
        name: "Breaded Shrimp",
        description: "Lightly breaded shrimp with herbs",
        price: "$18.99",
        vegetarian: false,
        spicy: 1,
      },
      {
        name: "Tandoori Chicken",
        description: "Grilled chicken marinated in yogurt & spices",
        price: "$22.99",
        vegetarian: false,
        spicy: 2,
      },
    ],
    "Main Courses": [
      {
        name: "Butter Chicken",
        description: "Boneless marinated chicken in tomato curry",
        price: "$23.99",
        vegetarian: false,
        spicy: 2,
      },
      {
        name: "Chicken Tikka Masala",
        description: "Boneless chicken in rich tomato gravy",
        price: "$23.99",
        vegetarian: false,
        spicy: 2,
      },
      {
        name: "Chicken Korma",
        description: "Boneless chicken in mild spices & creamy sauce",
        price: "$23.99",
        vegetarian: false,
        spicy: 1,
      },
      {
        name: "Chicken Palak",
        description: "Chicken & spinach cooked in aromatic spices",
        price: "$23.99",
        vegetarian: false,
        spicy: 2,
      },
      {
        name: "Shrimp Phungi",
        description: "Shrimp cooked in rich Indian herbs",
        price: "$23.99",
        vegetarian: false,
        spicy: 2,
      },
      {
        name: "Lamb Rogan",
        description: "Lamb cooked in mild gravy",
        price: "$23.99",
        vegetarian: false,
        spicy: 2,
      },
      {
        name: "Lamb Phuna",
        description: "Lamb cooked in onion gravy",
        price: "$23.99",
        vegetarian: false,
        spicy: 3,
      },
      {
        name: "Goat Curry",
        description: "Goat meat in traditional Indian spices",
        price: "$23.99",
        vegetarian: false,
        spicy: 3,
      },
      {
        name: "Goat Roganjosh",
        description: "Goat in aromatic spices",
        price: "$23.99",
        vegetarian: false,
        spicy: 3,
      },
    ],
    "Vegetable Dishes": [
      {
        name: "Black Dal",
        description: "Black lentils cooked with rice",
        price: "$19.99",
        vegetarian: true,
        spicy: 1,
      },
      {
        name: "Smoked Yellow Dal",
        description: "Yellow lentils with mild spices",
        price: "$20.99",
        vegetarian: true,
        spicy: 1,
      },
      {
        name: "Baigan Bhartha",
        description: "Grilled eggplant with onion and tomato",
        price: "$20.99",
        vegetarian: true,
        spicy: 2,
      },
      {
        name: "Aloo Mutter",
        description: "Potatoes & peas in curry sauce",
        price: "$20.99",
        vegetarian: true,
        spicy: 1,
      },
      {
        name: "Malai Kofta",
        description: "Vegetable dumplings in creamy sauce",
        price: "$22.99",
        vegetarian: true,
        spicy: 1,
      },
      {
        name: "Paneer Masala",
        description: "Cottage cheese in mild Indian spices",
        price: "$20.99",
        vegetarian: true,
        spicy: 2,
      },
      {
        name: "Chana Masala",
        description: "Chickpeas in aromatic spices",
        price: "$20.99",
        vegetarian: true,
        spicy: 2,
      },
      {
        name: "Palak Paneer",
        description: "Cottage cheese in spinach gravy",
        price: "$20.99",
        vegetarian: true,
        spicy: 1,
      },
      {
        name: "Tofu Tikka Masala",
        description: "Tofu in rich tomato sauce",
        price: "$20.99",
        vegetarian: true,
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
      {
        name: "Onion Chilli Salad",
        description: "Fresh onion & chilli mix",
        price: "$2.99",
        vegetarian: true,
        spicy: 2,
      },
      {
        name: "Paneer Tikka Masala Kebab",
        description: "Cottage cheese kebabs with spices",
        price: "$22.99",
        vegetarian: true,
        spicy: 2,
      },
    ],
    Desserts: [
      {
        name: "Rasmalai",
        description: "Cottage cheese dumplings in sweet milk",
        price: "$3.00",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "Gulab Jamun",
        description: "Sweet milk dumplings in rose syrup",
        price: "$3.00",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "Kulfi",
        description: "Traditional Indian ice cream",
        price: "$3.00",
        vegetarian: true,
        spicy: 0,
      },
    ],
    Beverages: [
      {
        name: "Mango Lassi",
        description: "Yogurt drink with mango",
        price: "$3.00",
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
        price: "$3.00",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "Assorted Soda",
        description: "Various sodas available",
        price: "$4.00",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "Bottled Spring Water",
        description: "Premium bottled water",
        price: "$6.00",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "Bottled Sparkling Water",
        description: "Sparkling mineral water",
        price: "$5.00",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "King Fisher",
        description: "Indian beer",
        price: "$9.00",
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
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8">
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
