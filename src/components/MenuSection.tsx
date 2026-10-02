"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Plus, Check, Search, Sparkles, Coffee, Flame, Heart } from "lucide-react";
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from "@/data/cafeData";
import { useCart } from "@/context/CartContext";

export default function MenuSection() {
  const { addToCart, cart } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [addedAnimation, setAddedAnimation] = useState<string | null>(null);

  // Available filter tags
  const filterTags = [
    "all",
    "House Favorite",
    "Signature",
    "Direct Trade",
    "Organic",
    "Vegan",
    "Baked Fresh at 5 AM",
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const categoryMatch =
        activeCategory === "all" || item.category === activeCategory;

      // Tag match
      const tagMatch =
        selectedTag === "all" ||
        (item.tags && item.tags.includes(selectedTag));

      // Search match
      const searchMatch =
        !searchQuery.trim() ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.notes && item.notes.toLowerCase().includes(searchQuery.toLowerCase()));

      return categoryMatch && tagMatch && searchMatch;
    });
  }, [activeCategory, selectedTag, searchQuery]);

  const handleAdd = (item: MenuItem) => {
    addToCart(item);
    setAddedAnimation(item.id);
    setTimeout(() => {
      setAddedAnimation(null);
    }, 1200);
  };

  const getItemCountInCart = (itemId: string) => {
    const found = cart.find((i) => i.item.id === itemId);
    return found ? found.quantity : 0;
  };

  return (
    <section id="menu" className="py-20 bg-[#FAF7F2] border-b border-[#EBDDCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Coffee className="w-3.5 h-3.5 text-amber-800" />
            <span>Artisan Provisions & Sips</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#24130A] tracking-tight">
            Our Handcrafted Menu
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3">
            Every pour-over, cortado, and brioche is prepared to order using exceptional ingredients, pure spring water, and mindful craft.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-6">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#3B2214] text-amber-50 shadow-md scale-102"
                  : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search & Tag Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search drinks, pour-overs, pastries..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-700/30 focus:border-amber-800 transition-all placeholder:text-stone-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Dietary Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
              Filter:
            </span>
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedTag === tag
                    ? "bg-amber-100 text-amber-900 border border-amber-300 font-semibold"
                    : "text-stone-600 hover:bg-stone-100 border border-transparent"
                }`}
              >
                {tag === "all" ? "All Tags" : tag}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-stone-300">
            <Coffee className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-stone-800">
              No menu items found
            </h3>
            <p className="text-stone-500 text-sm mt-1">
              Try adjusting your search terms or dietary filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
                setSelectedTag("all");
              }}
              className="mt-4 px-4 py-2 rounded-full bg-amber-800 text-amber-50 text-xs font-medium hover:bg-amber-900"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const inCartCount = getItemCountInCart(item.id);
              const isJustAdded = addedAnimation === item.id;

              return (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    {/* Item Image with Badges */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      {/* Tag badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        {item.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-stone-900 backdrop-blur-xs shadow-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Calorie badge if present */}
                      {item.calories && (
                        <div className="absolute bottom-2.5 right-3 text-[11px] font-medium text-stone-200 bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded-md">
                          {item.calories}
                        </div>
                      )}
                    </div>

                    {/* Content Details */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug group-hover:text-amber-900 transition-colors">
                          {item.name}
                        </h3>
                        <span className="font-serif text-lg font-bold text-[#3B2214] shrink-0">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>

                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-3">
                        {item.description}
                      </p>

                      {/* Flavor Notes */}
                      {item.notes && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FAF4ED] border border-[#ECD9C5] text-amber-900 text-xs font-medium">
                          <Sparkles className="w-3 h-3 text-amber-700 shrink-0" />
                          <span>Notes: {item.notes}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => handleAdd(item)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        isJustAdded
                          ? "bg-emerald-700 text-white"
                          : inCartCount > 0
                          ? "bg-[#FAF4ED] text-amber-950 border border-amber-300 hover:bg-amber-100"
                          : "bg-[#3B2214] hover:bg-[#27150B] text-amber-50 shadow-xs active:scale-98"
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-200" />
                          <span>Added to Bag!</span>
                        </>
                      ) : inCartCount > 0 ? (
                        <>
                          <Plus className="w-4 h-4 text-amber-800" />
                          <span>Add Another ({inCartCount} in bag)</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 text-amber-200" />
                          <span>Add to Order Bag • ${item.price.toFixed(2)}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
