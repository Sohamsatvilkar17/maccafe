"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Check, RefreshCw, ShoppingBag, ArrowRight } from "lucide-react";
import { COFFEE_ROASTS, MENU_ITEMS } from "@/data/cafeData";
import { useCart } from "@/context/CartContext";

export default function BeanFinder() {
  const { addToCart } = useCart();
  const [flavorPreference, setFlavorPreference] = useState<"fruity" | "balanced" | "bold">("balanced");
  const [brewStyle, setBrewStyle] = useState<"pourover" | "milky" | "cold">("pourover");
  const [addedPrompt, setAddedPrompt] = useState(false);

  // Derive recommendation based on user selections
  const recommendation = React.useMemo(() => {
    if (flavorPreference === "fruity") {
      return {
        roast: COFFEE_ROASTS[1], // Solar Flora (Light)
        suggestedDrink: MENU_ITEMS[6], // Ethiopian Yirgacheffe V60 Pour-Over
        pairingTip: "Best brewed cleanly through paper filter or as an iced pour-over with no dairy to preserve delicate peach florals.",
      };
    } else if (flavorPreference === "bold") {
      return {
        roast: COFFEE_ROASTS[2], // Midnight Hearth (Dark)
        suggestedDrink: MENU_ITEMS[1], // Slow-Steeped Cold Brew
        pairingTip: "Pairs miraculously over ice or with steamed oat milk, unlocking rich fudge, cedar, and molasses undertones.",
      };
    } else {
      return {
        roast: COFFEE_ROASTS[0], // Maccafe House Blend (Medium)
        suggestedDrink: MENU_ITEMS[0], // Classic Cappuccino
        pairingTip: "The gold standard for daily balance: bittersweet chocolate and toasted hazelnut paired with fresh sourdough.",
      };
    }
  }, [flavorPreference, brewStyle]);

  const handleOrderRecommendation = () => {
    addToCart(recommendation.suggestedDrink);
    setAddedPrompt(true);
    setTimeout(() => setAddedPrompt(false), 1500);
  };

  return (
    <section id="bean-finder" className="py-20 bg-[#F5EFE6] border-b border-[#E8DFD3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-900/10 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-800" />
            <span>Interactive Flavor Match</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#24130A]">
            Find Your Signature Cup
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Tell us your palate preferences and we&apos;ll match you with the ideal single-origin roast and drink pairing.
          </p>
        </div>

        {/* Quiz Steps Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-stone-200/90 shadow-md">
          <div className="space-y-8">
            {/* Step 1: Palate */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-2">
                Step 1 • What flavor profile captivates you?
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setFlavorPreference("fruity")}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    flavorPreference === "fruity"
                      ? "border-amber-700 bg-amber-50/70 text-stone-900 ring-2 ring-amber-700/20"
                      : "border-stone-200 hover:border-stone-300 text-stone-700"
                  }`}
                >
                  <span className="text-xl block mb-1">🌸</span>
                  <div className="font-semibold text-sm">Bright & Floral</div>
                  <div className="text-xs text-stone-500 mt-0.5">Jasmine, Meyer lemon & peach</div>
                </button>

                <button
                  onClick={() => setFlavorPreference("balanced")}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    flavorPreference === "balanced"
                      ? "border-amber-700 bg-amber-50/70 text-stone-900 ring-2 ring-amber-700/20"
                      : "border-stone-200 hover:border-stone-300 text-stone-700"
                  }`}
                >
                  <span className="text-xl block mb-1">🍯</span>
                  <div className="font-semibold text-sm">Sweet & Balanced</div>
                  <div className="text-xs text-stone-500 mt-0.5">Caramel, red apple & toasted pecan</div>
                </button>

                <button
                  onClick={() => setFlavorPreference("bold")}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    flavorPreference === "bold"
                      ? "border-amber-700 bg-amber-50/70 text-stone-900 ring-2 ring-amber-700/20"
                      : "border-stone-200 hover:border-stone-300 text-stone-700"
                  }`}
                >
                  <span className="text-xl block mb-1">🍫</span>
                  <div className="font-semibold text-sm">Rich & Deep</div>
                  <div className="text-xs text-stone-500 mt-0.5">Dark cocoa, molasses & cedar</div>
                </button>
              </div>
            </div>

            {/* Step 2: Brew Preference */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-2">
                Step 2 • How do you normally take your coffee?
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setBrewStyle("pourover")}
                  className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                    brewStyle === "pourover"
                      ? "border-amber-700 bg-amber-50/70 text-stone-900 ring-2 ring-amber-700/20"
                      : "border-stone-200 hover:border-stone-300 text-stone-700"
                  }`}
                >
                  <div className="font-medium text-sm">Filter / Pour-Over</div>
                  <div className="text-xs text-stone-500">Black, clean & crisp</div>
                </button>

                <button
                  onClick={() => setBrewStyle("milky")}
                  className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                    brewStyle === "milky"
                      ? "border-amber-700 bg-amber-50/70 text-stone-900 ring-2 ring-amber-700/20"
                      : "border-stone-200 hover:border-stone-300 text-stone-700"
                  }`}
                >
                  <div className="font-medium text-sm">Cortado / Flat White</div>
                  <div className="text-xs text-stone-500">Silky steamed milk or oat</div>
                </button>

                <button
                  onClick={() => setBrewStyle("cold")}
                  className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                    brewStyle === "cold"
                      ? "border-amber-700 bg-amber-50/70 text-stone-900 ring-2 ring-amber-700/20"
                      : "border-stone-200 hover:border-stone-300 text-stone-700"
                  }`}
                >
                  <div className="font-medium text-sm">Iced / Slow Cold Brew</div>
                  <div className="text-xs text-stone-500">Chilled, refreshing & smooth</div>
                </button>
              </div>
            </div>

            {/* Results Box */}
            <div className="mt-8 pt-8 border-t border-stone-200 bg-[#FAF7F2] -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 lg:-mx-10 lg:-mb-10 p-6 sm:p-8 rounded-b-3xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden relative shrink-0 shadow-sm">
                    <Image
                      src={recommendation.suggestedDrink.image}
                      alt={recommendation.suggestedDrink.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                      Your Curated Pair
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                      {recommendation.suggestedDrink.name}
                    </h3>
                    <p className="text-xs text-stone-600 mt-0.5 max-w-md">
                      {recommendation.pairingTip}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                  <button
                    onClick={handleOrderRecommendation}
                    className={`w-full md:w-auto px-5 py-3 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      addedPrompt
                        ? "bg-emerald-700 text-white"
                        : "bg-[#3B2214] hover:bg-[#27150B] text-amber-50 shadow-md"
                    }`}
                  >
                    {addedPrompt ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Order Bag!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-amber-200" />
                        <span>Order Pair • ${recommendation.suggestedDrink.price.toFixed(2)}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
