export interface MenuItem {
  id: string;
  name: string;
  category: "coffee" | "brew-bar" | "tea-botanicals" | "bakery" | "bites";
  price: number;
  description: string;
  notes?: string;
  tags?: string[];
  popular?: boolean;
  image: string;
  calories?: string;
}

export interface CoffeeRoast {
  id: string;
  name: string;
  origin: string;
  altitude: string;
  process: string;
  notes: string[];
  roastLevel: "Light" | "Medium-Light" | "Medium" | "Dark";
  roastPercent: number; // 0 to 100
  pricePerBag: number;
  description: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  favoriteItem: string;
  date: string;
}

export const CAFE_INFO = {
  name: "The Daily Brew",
  tagline: "Small-Batch Roastery & Artisan Neighborhood Bakery",
  foundedYear: 2018,
  address: "428 Elmwood Grove, Suite 101, Artisan Quarter",
  city: "Portland, OR 97209",
  phone: "(503) 555-0194",
  email: "hello@thedailybrew.cafe",
  instagram: "@thedailybrew.cafe",
  hours: {
    weekdays: "6:30 AM – 6:00 PM",
    saturday: "7:00 AM – 7:00 PM",
    sunday: "7:30 AM – 5:00 PM",
  },
  announcement: "☕ Seasonal Arrival: Costa Rica Honey Process Micro-lot now on bar!",
};

export const MENU_CATEGORIES = [
  { id: "all", label: "Full Menu" },
  { id: "coffee", label: "Espresso & Milk" },
  { id: "brew-bar", label: "Slow Bar & Pour-Overs" },
  { id: "tea-botanicals", label: "Teas & Botanicals" },
  { id: "bakery", label: "Morning Bakes" },
  { id: "bites", label: "Artisan Toast & Plates" },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "item-1",
    name: "Golden Cardamom Cortado",
    category: "coffee",
    price: 5.25,
    description: "Double ristretto over silky steamed oat milk, infused with green cardamom pods and raw wildflower honey.",
    notes: "Aromatic, Warm Spice, Velvety",
    tags: ["Signature", "House Favorite"],
    popular: true,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    calories: "110 kcal",
  },
  {
    id: "item-2",
    name: "Ethiopia Guji V60 Pour-Over",
    category: "brew-bar",
    price: 6.5,
    description: "Single-origin heirloom variety brewed to order with water at 93°C. Clean jasmine floral aromatics and bright peach finish.",
    notes: "Jasmine, Peach Nectar, Bergamot",
    tags: ["Direct Trade", "Single Origin"],
    popular: true,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    calories: "5 kcal",
  },
  {
    id: "item-3",
    name: "Smoked Sea Salt Caramel Latte",
    category: "coffee",
    price: 6.0,
    description: "House-made brown butter caramel, double shot of our Reserve Espresso, textured whole milk, and Maldon flake salt.",
    notes: "Rich Toffee, Roasted Hazelnut",
    tags: ["Staff Pick"],
    popular: true,
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80",
    calories: "220 kcal",
  },
  {
    id: "item-4",
    name: "Velvet Flat White",
    category: "coffee",
    price: 4.95,
    description: "Double shot of sweet espresso pulled short, folded into micro-foamed whole milk with glossy latte art.",
    notes: "Dark Chocolate, Sweet Almond",
    tags: ["Classic"],
    popular: false,
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    calories: "135 kcal",
  },
  {
    id: "item-5",
    name: "Kyoto Slow-Drip Cold Brew",
    category: "brew-bar",
    price: 5.75,
    description: "Brewed drop-by-drop over 14 hours using cold alpine water, yielding a deeply complex, wine-like body with zero astringency.",
    notes: "Cocoa Nibs, Black Cherry, Bourbon Vanilla",
    tags: ["Limited Daily"],
    popular: true,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    calories: "10 kcal",
  },
  {
    id: "item-6",
    name: "Ceremonial Uji Matcha Latte",
    category: "tea-botanicals",
    price: 6.25,
    description: "First-harvest organic matcha stone-ground in Kyoto, whisked by hand with bamboo chasen and lightly sweetened with agave.",
    notes: "Umami, Sweet Cream, Vibrant Emerald",
    tags: ["Organic", "Antioxidant-Rich"],
    popular: true,
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
    calories: "140 kcal",
  },
  {
    id: "item-7",
    name: "Wild Lavender & Blue Fog Herbal Infusion",
    category: "tea-botanicals",
    price: 5.25,
    description: "Locally hand-foraged Olympic lavender, blue butterfly pea flower, Madagascar vanilla bean, and lightly steamed oat cream.",
    notes: "Floral, Relaxing, Naturally Caffeine-Free",
    tags: ["Caffeine-Free", "Vegan"],
    popular: false,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    calories: "85 kcal",
  },
  {
    id: "item-8",
    name: "Twice-Baked Almond & Frangipane Croissant",
    category: "bakery",
    price: 5.85,
    description: "Pure Normandy butter laminated croissant filled with velvety almond cream, soaked in vanilla syrup, and topped with toasted almonds.",
    notes: "Flaky, Nutty, Golden Crust",
    tags: ["Baked Fresh at 5 AM", "Best Seller"],
    popular: true,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    calories: "380 kcal",
  },
  {
    id: "item-9",
    name: "Orange Blossom & Cardamom Morning Bun",
    category: "bakery",
    price: 5.5,
    description: "Caramelized laminated sourdough pastry roll tossed in citrus zest sugar and freshly crushed Ceylon cardamom.",
    notes: "Crisp Exterior, Tender Custardy Core",
    tags: ["House Special"],
    popular: false,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    calories: "340 kcal",
  },
  {
    id: "item-10",
    name: "Wild Mushroom & Truffled Ricotta Sourdough Toast",
    category: "bites",
    price: 11.5,
    description: "Locally foraged chanterelles and king oysters sautéed in brown butter over thick-sliced naturally leavened bread with sheep ricotta and microgreens.",
    notes: "Savory, Earthy, Rich Umami",
    tags: ["Vegetarian", "Seasonal"],
    popular: true,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    calories: "420 kcal",
  },
  {
    id: "item-11",
    name: "Heirloom Avocado & Pickled Shallot Tartine",
    category: "bites",
    price: 10.75,
    description: "Creamy Hass avocado smash, house-pickled pink shallots, toasted hemp hearts, Aleppo chili oil, and Maldon salt on toasted seeded loaf.",
    notes: "Zesty, Creamy, Crisp",
    tags: ["Vegan", "Nutrient Dense"],
    popular: false,
    image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=800&q=80",
    calories: "390 kcal",
  },
  {
    id: "item-12",
    name: "Brown Butter Chocolate Chunk & Sea Salt Cookie",
    category: "bakery",
    price: 4.25,
    description: "Valrhona 70% bittersweet disks nestled in 48-hour cold-fermented brown butter dough, baked till crisp on edges with molten centers.",
    notes: "Decadent, Caramelized, Salty Sweet",
    tags: ["House Favorite"],
    popular: true,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
    calories: "310 kcal",
  },
];

export const COFFEE_ROASTS: CoffeeRoast[] = [
  {
    id: "roast-1",
    name: "Lumina Dawn (Light Roast)",
    origin: "Yirgacheffe, Ethiopia • Smallholder Farmers",
    altitude: "1,950m - 2,200m",
    process: "Washed & Raised African Sun Beds",
    notes: ["White Blossom", "Meyer Lemon", "Wild Honey"],
    roastLevel: "Light",
    roastPercent: 30,
    pricePerBag: 21.0,
    description: "A luminous, tea-like clarity designed to highlight the untouched terroir of high-altitude Ethiopian heirloom botanicals.",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "roast-2",
    name: "Terra Madre (Medium Roast)",
    origin: "Antioquia, Colombia • Finca La Esperanza",
    altitude: "1,650m - 1,800m",
    process: "Extended Honey Fermentation",
    notes: ["Brown Sugar", "Red Apple", "Toasted Pecan"],
    roastLevel: "Medium",
    roastPercent: 60,
    pricePerBag: 19.5,
    description: "Our signature everyday cup. Perfectly balanced acidity with deeply comforting sweetness and warm pastry aromatics.",
    image: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "roast-3",
    name: "Velvet Obsidian (Dark Roast)",
    origin: "Antigua, Guatemala & Sumatra Mandheling",
    altitude: "1,400m - 1,700m",
    process: "Wet-Hulled & Fully Washed Blend",
    notes: ["Dark Cocoa", "Cedarwood", "Molasses"],
    roastLevel: "Dark",
    roastPercent: 88,
    pricePerBag: 20.0,
    description: "Deep, smokeless caramelization preserving density and intense fudge-like richness. Exceptional with steamed milk or espresso.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Elena Rostova",
    role: "Architect & Daily Regular",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "The Daily Brew has changed my morning routine forever. The natural light through the brick arches, the sound of the vintage La Marzocco, and their Cardamom Cortado are simply unmatched.",
    favoriteItem: "Golden Cardamom Cortado",
    date: "3 days ago",
  },
  {
    id: "rev-2",
    author: "Marcus Chen",
    role: "Food & Wine Writer, Northwest Journal",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "Precision extraction at its finest. Their Ethiopia Guji pour-over displays rare clarity, and the twice-baked almond croissant rivals any patisserie in Paris or Lyon.",
    favoriteItem: "Ethiopia Guji V60 & Almond Croissant",
    date: "1 week ago",
  },
  {
    id: "rev-3",
    author: "Sophia Alvarez",
    role: "Photographer & Creative Director",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "Finding a boutique cafe with ultra-fast Wi-Fi, incredible organic matcha, and genuinely kind baristas who remember your name is rare. It feels like home.",
    favoriteItem: "Ceremonial Uji Matcha Latte",
    date: "2 weeks ago",
  },
];

export const SEASONAL_SPECIALS = [
  {
    title: "Autumn Botanical Harvest",
    badge: "Limited Release",
    item: "Cardamom Spiced Maple Flat White",
    description: "Slow-reduced Vermont grade-A maple, freshly ground Ceylon cardamom, double shot espresso, and silky microfoam.",
    accent: "Amber Warmth",
  },
  {
    title: "Small-Batch Roaster's Reserve",
    badge: "Micro-Lot (Only 40 Bags)",
    item: "Panama Geisha Natural Process",
    description: "Rare floral profile with notes of bergamot, lychee, and honeysuckle. Available exclusively on the slow pour-over bar.",
    accent: "Floral Elegance",
  },
  {
    title: "Morning Dawn Bakery",
    badge: "Fresh From Oven",
    item: "Roasted Fig & Goat Cheese Danish",
    description: "Flaky fermented puff pastry filled with thyme-infused goat curd and black mission figs caramelized in clover honey.",
    accent: "Sweet & Savory",
  },
];

export const BEAN_FINDER_QUESTIONS = [
  {
    id: "flavor",
    title: "Which aroma or flavor notes captivate your senses?",
    options: [
      { id: "fruity", label: "🌸 Jasmine, Peach & Wild Florals", match: "roast-1" },
      { id: "balanced", label: "🍯 Caramel, Toffee & Honeyed Nuts", match: "roast-2" },
      { id: "bold", label: "🍫 Bittersweet Dark Chocolate & Molasses", match: "roast-3" },
    ],
  },
  {
    id: "brew_style",
    title: "How do you most often brew your coffee?",
    options: [
      { id: "pourover", label: "💧 Chemex / V60 / Aeropress Filter" },
      { id: "milky", label: "🥛 Flat White, Latte, or Moka Pot" },
      { id: "cold", label: "🧊 Cold Brew / Iced Americano" },
    ],
  },
];
