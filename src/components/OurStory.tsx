"use client";

import React from "react";
import Image from "next/image";
import { Leaf, Award, Heart, ShieldCheck, SunMedium } from "lucide-react";
import { CAFE_INFO } from "@/data/cafeData";

export default function OurStory() {
  return (
    <section id="story" className="py-20 bg-[#FAF7F2] border-b border-[#EBDDCF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80"
                  alt="Artisan espresso extraction at Maccafe"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 rounded-2xl bg-[#F0E6D8] border border-[#DFCBB5] text-stone-800">
                <span className="font-serif text-3xl font-bold text-amber-900 block mb-1">
                  100%
                </span>
                <span className="text-xs sm:text-sm font-semibold text-stone-900 block">
                  Wild Yeast Sourdough
                </span>
                <p className="text-xs text-stone-600 mt-1">
                  Long 48-hour cold fermentation for incredible depth of flavor and easy digestion.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-5 rounded-2xl bg-[#3B2214] text-amber-50">
                <span className="font-serif text-3xl font-bold text-amber-300 block mb-1">
                  10 AM
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white block">
                  Fresh Hearth Bakes
                </span>
                <p className="text-xs text-amber-200/80 mt-1">
                  Warm cinnamon buns and crusty loaves emerge golden-brown as doors open daily.
                </p>
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                  alt="Cozy modern aesthetic cafe space at Maccafe"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Story text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider">
              <SunMedium className="w-3.5 h-3.5 text-amber-700" />
              <span>Our Craft & Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#24130A] leading-tight">
              Artisan espresso meets <br />
              <span className="italic font-normal text-amber-800">slow-fermented sourdough.</span>
            </h2>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
              Located on historic Mercer Street in SoHo, <strong className="text-stone-950 font-medium">{CAFE_INFO.name}</strong> was created to merge two timeless culinary arts: masterfully extracted specialty espresso and slow-fermented hearth sourdough bakes.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Designed as a calm, cozy, modern sanctuary with warm oak timbers, custom ceramics, and soft natural lighting, we welcome our community from <strong>10 AM to 8 PM daily</strong>. Whether you stop by for a morning cappuccino and warm cardamom bun, an afternoon cold brew while working, or an evening decaf flat white, every detail is made with deliberate care.
            </p>

            {/* Core Values checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-200">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Precision Espresso</h4>
                  <p className="text-xs text-stone-600">Gram-weighed dosing, mineral-balanced brew water, and velvety microfoam.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Leaf className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Natural Ingredients</h4>
                  <p className="text-xs text-stone-600">Organic unbleached flours, grass-fed butter, and unrefined raw sugars.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Cozy Modern Sanctuary</h4>
                  <p className="text-xs text-stone-600">Comfortable banquettes, fast Wi-Fi, and a relaxed, unhurried vibe.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Open 10 AM – 8 PM Daily</h4>
                  <p className="text-xs text-stone-600">Consistent hours 7 days a week for breakfast, lunch, and evening unwinds.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
