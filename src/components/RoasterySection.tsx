"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Flame, Mountain, Droplet, Sparkles, Check, ShoppingBag, Award } from "lucide-react";
import { COFFEE_ROASTS, CoffeeRoast } from "@/data/cafeData";
import { useCart } from "@/context/CartContext";

export default function RoasterySection() {
  const { addToCart } = useCart();
  const [selectedRoast, setSelectedRoast] = useState<string>("roast-2");
  const [addedBag, setAddedBag] = useState<string | null>(null);

  const activeRoast = COFFEE_ROASTS.find((r) => r.id === selectedRoast) || COFFEE_ROASTS[1];

  const handleOrderBag = (roast: CoffeeRoast) => {
    // Map roast into a cart item representation
    addToCart({
      id: `bag-${roast.id}`,
      name: `${roast.name} (12oz Whole Bean Bag)`,
      category: "coffee",
      price: roast.pricePerBag,
      description: `Freshly roasted 12oz bag. ${roast.origin}. Tasting notes: ${roast.notes.join(", ")}.`,
      image: roast.image,
    });
    setAddedBag(roast.id);
    setTimeout(() => setAddedBag(null), 1500);
  };

  return (
    <section id="roastery" className="py-20 bg-[#24150B] text-[#F5EDE4] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Cast-Iron Drum Roasting</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Micro-Batch Roastery
          </h2>
          <p className="text-stone-300 text-base sm:text-lg mt-3 leading-relaxed">
            We roast in strictly limited 6kg batches twice a week to maximize sweetness, preserve organic terroir, and celebrate the distinct character of each high-altitude harvest.
          </p>
        </div>

        {/* Roast Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-12">
          {COFFEE_ROASTS.map((roast) => {
            const isSelected = selectedRoast === roast.id;
            return (
              <button
                key={roast.id}
                onClick={() => setSelectedRoast(roast.id)}
                className={`p-4 rounded-2xl text-left transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-[#3D2516] border-amber-500 shadow-lg scale-102"
                    : "bg-[#2D1B10]/80 border-stone-800/80 hover:bg-[#341E12] text-stone-400"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    isSelected ? "text-amber-300" : "text-stone-400"
                  }`}>
                    {roast.roastLevel}
                  </span>
                  <span className="text-xs font-semibold text-stone-300">
                    ${roast.pricePerBag.toFixed(2)}
                  </span>
                </div>
                <div className={`font-serif text-base font-bold ${
                  isSelected ? "text-white" : "text-stone-300"
                }`}>
                  {roast.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Roast Showcase Card */}
        <div className="bg-[#2D1B10] border border-amber-900/50 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual representation */}
            <div className="lg:col-span-5">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border border-amber-900/40">
                <Image
                  src={activeRoast.image}
                  alt={activeRoast.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block mb-1">
                    Whole Bean • Roasted Weekly
                  </span>
                  <h4 className="font-serif text-xl font-bold text-white">
                    {activeRoast.name}
                  </h4>
                </div>
              </div>
            </div>

            {/* Roast Details & Stats */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
                    {activeRoast.roastLevel} Roast
                  </span>
                  <span className="text-stone-400 text-xs sm:text-sm">
                    {activeRoast.origin}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {activeRoast.name}
                </h3>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed mt-2">
                  {activeRoast.description}
                </p>
              </div>

              {/* Roast Intensity Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-stone-300 font-medium">
                  <span>Roast Profile Depth</span>
                  <span className="text-amber-300 font-bold">{activeRoast.roastPercent}% Intensity</span>
                </div>
                <div className="h-2.5 w-full bg-stone-800 rounded-full overflow-hidden p-0.5 border border-stone-700">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-700 rounded-full transition-all duration-500"
                    style={{ width: `${activeRoast.roastPercent}%` }}
                  />
                </div>
              </div>

              {/* Origin Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-[#382113] p-3.5 rounded-xl border border-amber-900/30">
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-medium mb-1">
                    <Mountain className="w-3.5 h-3.5" />
                    <span>Altitude</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white block">
                    {activeRoast.altitude}
                  </span>
                </div>

                <div className="bg-[#382113] p-3.5 rounded-xl border border-amber-900/30">
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-medium mb-1">
                    <Droplet className="w-3.5 h-3.5" />
                    <span>Process</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white block">
                    {activeRoast.process}
                  </span>
                </div>

                <div className="bg-[#382113] p-3.5 rounded-xl border border-amber-900/30 col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-medium mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Tasting Notes</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-amber-200 block truncate">
                    {activeRoast.notes.join(" • ")}
                  </span>
                </div>
              </div>

              {/* Order Bag CTA */}
              <div className="pt-4 border-t border-amber-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-stone-400 text-xs block">Bag Price (12 oz / 340g)</span>
                  <span className="font-serif text-2xl font-bold text-amber-300">
                    ${activeRoast.pricePerBag.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => handleOrderBag(activeRoast)}
                  className={`w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    addedBag === activeRoast.id
                      ? "bg-emerald-600 text-white"
                      : "bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md active:scale-95"
                  }`}
                >
                  {addedBag === activeRoast.id ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Take Home a Bag (12oz)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
