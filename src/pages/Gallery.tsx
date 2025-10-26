import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = {
    Food: [
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800",
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800",
    ],
    Restaurant: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    ],
    Events: [
      "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=800",
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-muted-foreground text-lg">
              A visual journey through our culinary delights and ambiance
            </p>
          </div>

          <Tabs defaultValue="Food" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="Food">Our Food</TabsTrigger>
              <TabsTrigger value="Restaurant">Restaurant</TabsTrigger>
              <TabsTrigger value="Events">Events</TabsTrigger>
            </TabsList>

            {Object.entries(categories).map(([category, images]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`${category} ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-playfair text-xl">View Image</span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
