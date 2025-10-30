import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flame, Leaf } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Menu = () => {
  const categories = ["Appetizers", "Vegetable Dishes", "Indian Specialties", "Biryani", "Breads", "Drinks & Desserts"];

  const menuItems = {
    Appetizers: [
      {
        name: "Samosa",
        description: "Fried vegetables and potato pockets",
        price: "$8.99",
        vegetarian: true,
        spicy: 1,
        image: "/images/samosa.jpg"
      },
      {
        name: "Sreekand Samosa",
        description: "Broken samosas mixed with peas & chickpeas, topped with chutneys",
        price: "$13.99",
        vegetarian: true,
        spicy: 1,
      },
      {
        name: "Cauliflower 65",
        description: "Crispy fried cauliflower tossed in Indian spices",
        price: "$17.99",
        vegetarian: true,
        spicy: 2,
        image: "/images/cauliflower-65.jpg"
      },
      {
        name: "Gobi Manchurian",
        description: "Indo-Chinese crispy cauliflower in tangy sauce",
        price: "$17.99",
        vegetarian: true,
        spicy: 2,
      },
      {
        name: "Chicken 65",
        description: "Marinated boneless chicken tossed in Indian spices",
        price: "$19.99",
        vegetarian: false,
        spicy: 3,
      },
      {
        name: "Chicken Pakora",
        description: "Chicken fritters with aromatic spices",
        price: "$17.99",
        vegetarian: false,
        spicy: 2,
      },
      {
        name: "Chicken Tikka",
        description: "Grilled chicken marinated in yogurt and spices",
        price: "$19.99",
        vegetarian: false,
        spicy: 2,
        image: "/images/chicken-tikka.jpg"
      },
      {
        name: "Tandoori Chicken",
        description: "Marinated chicken baked in a tandoor oven",
        price: "$22.99",
        vegetarian: false,
        spicy: 2,
        image: "/images/tandoori-chicken.jpg"
      },
      {
        name: "Garlic Cauliflower Bhaji",
        description: "Cauliflower cooked with garlic and spices",
        price: "$19.99",
        vegetarian: true,
        spicy: 2,
      },
      {
        name: "Beetroot Chaat",
        description: "Tossed with crunchy wafers, chickpeas & tangy sauce",
        price: "$19.99",
        vegetarian: true,
        spicy: 1,
      },
      {
        name: "Black Daal",
        description: "Black lentils slow-cooked with butter and cream",
        price: "$19.99",
        vegetarian: true,
        spicy: 1,
      },
      {
        name: "Dahi Vada",
        description: "Lentil dumplings in creamy yogurt",
        price: "$15.99",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "Veg Hakka Noodles",
        description: "Stir-fried noodles with vegetables",
        price: "$21.99",
        vegetarian: true,
        spicy: 1,
      },
      {
        name: "Vegetable Fried Rice",
        description: "Aromatic rice with mixed vegetables",
        price: "$17.99",
        vegetarian: true,
        spicy: 1,
      },
      {
        name: "Egg Bhurji",
        description: "Scrambled eggs with Indian spices",
        price: "$17.99",
        vegetarian: false,
        spicy: 2,
      },
    ],
    "Vegetable Dishes": [
      {
        name: "Tofu or Paneer Wings",
        description: "Crispy wings with Indian spices",
        price: "$22.99",
        vegetarian: true,
        spicy: 2,
      },
      {
        name: "Chana Masala",
        description: "Chickpeas cooked with mild Indian spices",
        price: "$19.99",
        vegetarian: true,
        spicy: 2,
      },
      {
        name: "Aloo Gobi",
        description: "Potatoes and cauliflower cooked with mild spices",
        price: "$20.99",
        vegetarian: true,
        spicy: 1,
      },
      {
        name: "Mixed Vegetable Curry",
        description: "Seasonal vegetables in aromatic curry",
        price: "$20.99",
        vegetarian: true,
        spicy: 2,
      },
      {
        name: "Palak Paneer",
        description: "Cottage cheese in creamy spinach gravy",
        price: "$22.99",
        vegetarian: true,
        spicy: 1,
        image: "/images/palak-paneer.jpg"
      },
      {
        name: "Paneer Tikka Masala",
        description: "Cottage cheese in rich tomato gravy",
        price: "$22.99",
        vegetarian: true,
        spicy: 2,
        image: "/images/paneer-tikka-masala.jpg"
      },
      {
        name: "Paneer Butter Masala",
        description: "Cottage cheese in creamy butter sauce",
        price: "$22.99",
        vegetarian: true,
        spicy: 1,
      },
      {
        name: "Paneer Kadai",
        description: "Cottage cheese with bell peppers in spicy gravy",
        price: "$22.99",
        vegetarian: true,
        spicy: 2,
      },
      {
        name: "Vegetable Korma",
        description: "Mixed vegetables in mild creamy sauce",
        price: "$20.99",
        vegetarian: true,
        spicy: 1,
      },
    ],
    "Indian Specialties": [
      {
        name: "Butter Chicken",
        description: "Boneless marinated chicken cooked in tomato-based sauce",
        price: "$23.99",
        vegetarian: false,
        spicy: 2,
        image: "/images/butter-chicken.jpg"
      },
      {
        name: "Chicken Tikka Masala",
        description: "Cooked in Indian herbs",
        price: "$23.99",
        vegetarian: false,
        spicy: 2,
        image: "/images/chicken-tikka-masala.jpg"
      },
      {
        name: "Chicken Kadai",
        description: "Cooked in aromatic spicy gravy",
        price: "$23.99",
        vegetarian: false,
        spicy: 3,
      },
      {
        name: "Chicken Curry",
        description: "Cooked in mild Indian spices",
        price: "$23.99",
        vegetarian: false,
        spicy: 2,
      },
      {
        name: "Chicken Vindaloo",
        description: "Cooked with spicy gravy",
        price: "$23.99",
        vegetarian: false,
        spicy: 3,
      },
      {
        name: "Goat Curry",
        description: "Cooked in Indian herbs",
        price: "$23.99",
        vegetarian: false,
        spicy: 3,
      },
      {
        name: "Goat Kadai",
        description: "Cooked in aromatic spicy gravy",
        price: "$23.99",
        vegetarian: false,
        spicy: 3,
      },
      {
        name: "Goat Vindaloo",
        description: "Cooked in spicy gravy",
        price: "$23.99",
        vegetarian: false,
        spicy: 3,
      },
      {
        name: "Lamb Curry",
        description: "Cooked with Indian herbs",
        price: "$23.99",
        vegetarian: false,
        spicy: 2,
      },
      {
        name: "Lamb Kadai",
        description: "Cooked in aromatic spicy gravy",
        price: "$23.99",
        vegetarian: false,
        spicy: 3,
      },
      {
        name: "Lamb Vindaloo",
        description: "Cooked in spicy gravy",
        price: "$23.99",
        vegetarian: false,
        spicy: 3,
      },
      {
        name: "Shrimp Curry",
        description: "Cooked in Indian herbs",
        price: "$23.99",
        vegetarian: false,
        spicy: 2,
      },
      {
        name: "Shrimp Kadai",
        description: "Cooked in aromatic spicy gravy",
        price: "$23.99",
        vegetarian: false,
        spicy: 3,
      },
      {
        name: "Shrimp Vindaloo",
        description: "Cooked in spicy gravy",
        price: "$23.99",
        vegetarian: false,
        spicy: 3,
      },
    ],
    Biryani: [
      {
        name: "Chicken Biryani",
        description: "Fragrant basmati rice with marinated chicken and aromatic spices",
        price: "$22.00",
        vegetarian: false,
        spicy: 2,
        image: "/images/chicken-biryani.jpg"
      },
      {
        name: "Lamb Biryani",
        description: "Aromatic rice dish with tender lamb and spices",
        price: "$22.00",
        vegetarian: false,
        spicy: 2,
      },
      {
        name: "Veggie Biryani",
        description: "Mixed vegetables with fragrant basmati rice",
        price: "$22.00",
        vegetarian: true,
        spicy: 2,
      },
      {
        name: "Fish Tikka Masala",
        description: "Grilled fish in rich tikka masala sauce with rice",
        price: "$23.99",
        vegetarian: false,
        spicy: 2,
      },
      {
        name: "Shrimp Tikka Masala",
        description: "Shrimp in creamy tikka masala with biryani rice",
        price: "$23.99",
        vegetarian: false,
        spicy: 2,
      },
    ],
    Breads: [
      {
        name: "Naan",
        description: "Traditional Indian flatbread baked in tandoor",
        price: "$5.00",
        vegetarian: true,
        spicy: 0,
        image: "/images/naan.jpg"
      },
      {
        name: "Garlic Naan",
        description: "Naan topped with fresh garlic and cilantro",
        price: "$6.00",
        vegetarian: true,
        spicy: 0,
        image: "/images/garlic-naan.jpg"
      },
    ],
    "Drinks & Desserts": [
      {
        name: "Mango Lassi",
        description: "Creamy refreshing mango drink",
        price: "$9.00",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "Mysore Tea (Chai)",
        description: "Indian spiced tea with milk",
        price: "$8.00",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "Butter Milk",
        description: "Spiced yogurt drink",
        price: "$8.00",
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
        price: "$6.00",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "King Fisher",
        description: "Imported Indian beer",
        price: "$9.00",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "Merlot",
        description: "Full-bodied red wine",
        price: "$8.00",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "Cabernet Sauvignon",
        description: "Rich red wine",
        price: "$8.00",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "Pinot Noir",
        description: "Light red wine",
        price: "$8.00",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "Chardonnay",
        description: "Classic white wine",
        price: "$8.00",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "Prosecco",
        description: "Italian sparkling wine",
        price: "$8.00",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "Mimosa",
        description: "Champagne with orange juice",
        price: "$10.00",
        vegetarian: true,
        spicy: 0,
      },
      {
        name: "Rasmalai",
        description: "Soft cottage cheese soaked in sweetened milk flavored with rose",
        price: "$8.00",
        vegetarian: true,
        spicy: 0,
        image: "/images/rasmalai.jpg"
      },
      {
        name: "Gulab Jamun",
        description: "Small fried pillows of dough soaked in rose-flavored syrup",
        price: "$8.00",
        vegetarian: true,
        spicy: 0,
        image: "/images/gulab-jamun.jpg"
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
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-8 h-auto gap-2">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="whitespace-normal py-3">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {menuItems[category as keyof typeof menuItems].map((item, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      {item.image && (
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      )}
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
