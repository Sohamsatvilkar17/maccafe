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
  name: "Maccafe",
  tagline: "Artisan espresso & fresh sourdough pastries in a cozy, modern space",
  foundedYear: 2021,
  address: "142 Mercer Street, SoHo Design District",
  city: "New York, NY 10012",
  phone: "(212) 555-0188",
  email: "hello@maccafe.coffee",
  instagram: "@maccafe.espresso",
  hours: {
    weekdays: "10:00 AM – 8:00 PM",
    saturday: "10:00 AM – 8:00 PM",
    sunday: "10:00 AM – 8:00 PM",
    summary: "10:00 AM – 8:00 PM daily",
  },
  announcement: "✨ Sourdough cinnamon buns fresh from the oven daily at 10 AM!",
};

export const MENU_CATEGORIES = [
  { id: "all", label: "Full Menu" },
  { id: "coffee", label: "Espresso & Milk" },
  { id: "brew-bar", label: "Cold Brew & Pour-Overs" },
  { id: "bakery", label: "Sourdough Pastries" },
  { id: "bites", label: "Artisan Toast & Plates" },
  { id: "tea-botanicals", label: "Matcha & Teas" },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "item-cappuccino",
    name: "Classic Cappuccino",
    category: "coffee",
    price: 4.75,
    description: "Double shot of rich house espresso balanced with equal parts steamed milk and dense, velvety microfoam. Finished with a subtle dusting of Dutch cocoa.",
    notes: "Bittersweet Chocolate, Hazelnut, Silky",
    tags: ["Signature", "House Favorite"],
    popular: true,
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    calories: "120 kcal",
  },
  {
    id: "item-cold-brew",
    name: "Slow-Steeped Cold Brew",
    category: "brew-bar",
    price: 5.25,
    description: "Coarsely ground Colombian beans slow-steeped in cold filtered water for 18 hours. Ultra-smooth with low acidity and a natural chocolate finish.",
    notes: "Dark Cocoa, Caramel, Toasted Pecan",
    tags: ["Customer Favorite", "18hr Steep"],
    popular: true,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    calories: "5 kcal",
  },
  {
    id: "item-cinnamon-bun",
    name: "Sourdough Cardamom Cinnamon Bun",
    category: "bakery",
    price: 5.5,
    description: "Slow-fermented wild yeast sourdough brioche swirled with Korintje cinnamon, crushed green cardamom, and caramelized brown butter, crowned with pearl sugar.",
    notes: "Warm Spice, Fluffy Interior, Golden Crust",
    tags: ["Baked Fresh Daily", "Best Seller"],
    popular: true,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    calories: "360 kcal",
  },
  {
    id: "item-avocado-toast",
    name: "Heirloom Avocado Toast",
    category: "bites",
    price: 11.5,
    description: "Thick slice of toasted house country sourdough, fresh smashed Hass avocado, Persian cucumber ribbons, pickled shallots, Aleppo chili flakes, and flaky Maldon sea salt.",
    notes: "Creamy, Citrus Zest, Crisp Sourdough",
    tags: ["Vegan", "Nutrient-Dense"],
    popular: true,
    image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=800&q=80",
    calories: "380 kcal",
  },
  {
    id: "item-flat-white",
    name: "Velvet Flat White",
    category: "coffee",
    price: 4.95,
    description: "Double ristretto espresso folded gently with glossy, silky micro-foamed whole milk (or organic oat milk). Creamy with an intense coffee aroma.",
    notes: "Sweet Cream, Caramelized Sugars",
    tags: ["Barista Pick"],
    popular: false,
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80",
    calories: "130 kcal",
  },
  {
    id: "item-iced-vanilla-latte",
    name: "Iced Madagascar Vanilla Latte",
    category: "coffee",
    price: 5.85,
    description: "Real Bourbon vanilla bean syrup crafted in-house, double shot of espresso, and cold milk poured over crystal cube ice.",
    notes: "Floral Vanilla, Brown Sugar, Refreshing",
    tags: ["House Special"],
    popular: true,
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    calories: "190 kcal",
  },
  {
    id: "item-pourover",
    name: "Ethiopian Yirgacheffe V60 Pour-Over",
    category: "brew-bar",
    price: 6.25,
    description: "Precision hand-poured single-origin filter coffee brewed fresh to order. Exhibits sparkling peach notes, jasmine florals, and bergamot tea clarity.",
    notes: "Jasmine Blossom, Peach, Bergamot",
    tags: ["Single Origin", "Direct Trade"],
    popular: true,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    calories: "2 kcal",
  },
  {
    id: "item-almond-croissant",
    name: "Twice-Baked Almond Croissant",
    category: "bakery",
    price: 5.75,
    description: "Laminated French butter croissant filled with rich frangipane almond cream, soaked in orange blossom syrup, and topped with toasted sliced almonds.",
    notes: "Flaky, Nutty, Buttery Rich",
    tags: ["Best Seller"],
    popular: true,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    calories: "390 kcal",
  },
  {
    id: "item-matcha-latte",
    name: "Ceremonial Uji Matcha Latte",
    category: "tea-botanicals",
    price: 6.0,
    description: "Directly imported first-harvest Japanese green tea whisked with bamboo chasen, paired with lightly steamed oat milk and agave nectar.",
    notes: "Umami, Sweet Cream, Vibrant Emerald",
    tags: ["Organic", "Antioxidants"],
    popular: true,
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
    calories: "140 kcal",
  },
  {
    id: "item-mushroom-toast",
    name: "Truffled Mushroom & Ricotta Toast",
    category: "bites",
    price: 12.5,
    description: "Sautéed wild forest mushrooms with garlic, fresh thyme, and white truffle glaze over whipped sheep ricotta and toasted sourdough.",
    notes: "Savory, Earthy, Garlic Herb",
    tags: ["Seasonal Special"],
    popular: false,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    calories: "410 kcal",
  },
  {
    id: "item-cookie",
    name: "Brown Butter Chocolate Chunk Cookie",
    category: "bakery",
    price: 4.25,
    description: "48-hour fermented brown butter dough packed with Valrhona 70% dark chocolate chunks and finished with crunchy Maldon sea salt flakes.",
    notes: "Decadent, Salty Sweet, Molten Core",
    tags: ["Staff Favorite"],
    popular: true,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
    calories: "320 kcal",
  },
  {
    id: "item-cortado",
    name: "Artisan Gibraltar Cortado",
    category: "coffee",
    price: 4.5,
    description: "Equal parts double espresso and warm silky milk served in a tempered Gibraltar faceted glass at the optimal sipping temperature (130°F).",
    notes: "Roasted Hazelnut, Toffee, Smooth",
    tags: ["Classic"],
    popular: false,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    calories: "80 kcal",
  },
];

export const COFFEE_ROASTS: CoffeeRoast[] = [
  {
    id: "roast-1",
    name: "Maccafe House Blend (Medium Roast)",
    origin: "Huila, Colombia & Cerrado, Brazil",
    altitude: "1,550m - 1,800m",
    process: "Washed & Natural Blend",
    notes: ["Milk Chocolate", "Toasted Hazelnut", "Orange Peel"],
    roastLevel: "Medium",
    roastPercent: 55,
    pricePerBag: 18.5,
    description: "Our daily heartbeat espresso. Rich and full-bodied with exceptional sweetness that cuts through milk or sings as a straight shot.",
    image: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "roast-2",
    name: "Solar Flora (Light Roast)",
    origin: "Guji Zone, Ethiopia • Oromia Region",
    altitude: "1,900m - 2,150m",
    process: "Natural Sun-Dried on Raised African Beds",
    notes: ["Ripe Peach", "Jasmine Blossom", "Meyer Lemon"],
    roastLevel: "Light",
    roastPercent: 30,
    pricePerBag: 21.0,
    description: "A bright, vibrant filter roast showcasing delicate florals and juicy stone-fruit sweetness with clean acidity.",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "roast-3",
    name: "Midnight Hearth (Dark Roast)",
    origin: "Huehuetenango, Guatemala & Sumatra",
    altitude: "1,450m - 1,750m",
    process: "Wet-Hulled & Fully Washed",
    notes: ["Bittersweet Cocoa", "Smoked Caramel", "Cedar"],
    roastLevel: "Dark",
    roastPercent: 85,
    pricePerBag: 19.0,
    description: "Deep, smokeless caramelization preserving density and intense fudge-like richness without ashiness.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Liam Vance",
    role: "SoHo Resident & Daily Regular",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "Maccafe is the gold standard for neighborhood spots. Their 10 AM warm sourdough cinnamon buns are pure heaven, and the cappuccino is pulled to perfection every single time.",
    favoriteItem: "Classic Cappuccino & Sourdough Cinnamon Bun",
    date: "2 days ago",
  },
  {
    id: "rev-2",
    author: "Chloe Martinez",
    role: "Designer & Coffee Enthusiast",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "The aesthetic is calm, modern, and inviting. The slow cold brew has zero bitterness, and the avocado toast on their fresh sourdough is the best in town.",
    favoriteItem: "Slow-Steeped Cold Brew & Avocado Toast",
    date: "5 days ago",
  },
  {
    id: "rev-3",
    author: "Julian Reynolds",
    role: "Food & Architectural Critic",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "Open 10 AM to 8 PM daily, Maccafe is the ideal refuge for afternoon meetings or an evening decaf flat white. True craftsmanship in every cup.",
    favoriteItem: "Velvet Flat White",
    date: "1 week ago",
  },
];

export const SEASONAL_SPECIALS = [
  {
    title: "Signature Espresso",
    badge: "House Specialty",
    item: "Classic Cappuccino with Cocoa Dust",
    description: "Double extraction of our Huila Colombia roast, silky microfoam, and organic unsweetened Dutch cocoa.",
    accent: "Velvety Comfort",
  },
  {
    title: "Morning Hearth Special",
    badge: "Fresh Out at 10 AM",
    item: "Swedish Sourdough Cardamom Bun",
    description: "Knotted wild-yeast brioche dough rich with Ceylon cinnamon and crunchy pearl sugar crystals.",
    accent: "Warm Spice",
  },
  {
    title: "Savory Sourdough Bite",
    badge: "All-Day Toast",
    item: "Heirloom Avocado & Pink Shallot Tartine",
    description: "Freshly smashed avocado, lemon zest, Aleppo pepper, and pickled shallots on thick country sourdough.",
    accent: "Crisp & Zesty",
  },
];

export const BEAN_FINDER_QUESTIONS = [
  {
    id: "flavor",
    title: "Which aroma or flavor notes captivate your senses?",
    options: [
      { id: "fruity", label: "🌸 Jasmine, Ripe Peach & Florals", match: "roast-2" },
      { id: "balanced", label: "🍫 Milk Chocolate, Toffee & Hazelnut", match: "roast-1" },
      { id: "bold", label: "☕ Bittersweet Cocoa, Caramel & Cedar", match: "roast-3" },
    ],
  },
  {
    id: "brew_style",
    title: "How do you most often brew your coffee?",
    options: [
      { id: "pourover", label: "💧 Pour-Over / Chemex / Aeropress" },
      { id: "milky", label: "🥛 Cappuccino, Flat White, or Latte" },
      { id: "cold", label: "🧊 Cold Brew / Iced Americano" },
    ],
  },
];
