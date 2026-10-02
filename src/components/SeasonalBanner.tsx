"use client";

import React from "react";
import { Sparkles, Flame, Leaf, ArrowRight } from "lucide-react";
import { SEASONAL_SPECIALS } from "@/data/cafeData";

export default function SeasonalBanner() {
  return (
    <section className="py-12 bg-[#2D1B10] text-[#F3EEE7] relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(#5C3822_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Limited Roaster Editions</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-50">
              Seasonal Brews & Autumn Signatures
            </h2>
            <p className="text-stone-300 text-sm sm:text-base mt-1 max-w-xl">
              Curated recipes highlighting micro-harvest coffees, botanical extracts, and seasonal hearth bakes.
            </p>
          </div>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors self-start md:self-auto"
          >
            <span>See Full Seasonal Menu</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SEASONAL_SPECIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#3D2516]/90 border border-amber-900/40 hover:border-amber-700/60 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-950/80 text-amber-300 border border-amber-800/40">
                    {item.badge}
                  </span>
                  <span className="text-xs text-amber-200/80 font-medium">
                    {item.accent}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-white mb-2">
                  {item.item}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-amber-900/50 flex items-center justify-between text-xs text-amber-300 font-medium">
                <span>Handcrafted Fresh Daily</span>
                <span className="text-stone-400">Order at Counter or Bag</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
