"use client";

import React from "react";
import Image from "next/image";
import { Coffee, ArrowRight, Sparkles, Award, CheckCircle2, Clock, MapPin } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CAFE_INFO } from "@/data/cafeData";

export default function Hero() {
  const { setIsReservationOpen } = useCart();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F5EFE6] to-[#FAF7F2] pt-8 pb-16 lg:py-24 border-b border-[#EBDDCF]">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-900/10 border border-amber-900/15 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>142 Mercer Street • SoHo</span>
              <span className="w-1 h-1 rounded-full bg-amber-700"></span>
              <span className="text-amber-800">10 AM – 8 PM Daily</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#24130A] tracking-tight leading-[1.12]">
              Artisan espresso & <br />
              <span className="italic font-normal text-amber-800">
                fresh sourdough pastries.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-700 max-w-2xl leading-relaxed">
              Step into <strong className="text-stone-900 font-semibold">{CAFE_INFO.name}</strong> — {CAFE_INFO.tagline}. 
              From velvety cappuccinos pulled on precision levers to slow-steeped cold brew and warm sourdough cardamom buns straight out of the hearth oven, we celebrate the ritual of slow craft.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#3B2214] text-amber-50 font-medium text-sm sm:text-base hover:bg-[#27150B] shadow-md hover:shadow-lg transition-all active:scale-95 group"
              >
                <span>Explore The Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => setIsReservationOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-stone-300 text-stone-800 font-medium text-sm sm:text-base hover:bg-stone-50 hover:border-stone-400 shadow-xs transition-all active:scale-95"
              >
                <Coffee className="w-4 h-4 text-amber-800" />
                <span>Reserve Table / Work Space</span>
              </button>
            </div>

            {/* Value Proposition Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-stone-300/60">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm">
                  <span className="font-semibold text-stone-900 block">Artisan Extraction</span>
                  <span className="text-stone-600 text-[11px]">Precision micro-lots</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm">
                  <span className="font-semibold text-stone-900 block">10 AM – 8 PM Daily</span>
                  <span className="text-stone-600 text-[11px]">Open 7 days a week</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm">
                  <span className="font-semibold text-stone-900 block">Wild Yeast Sourdough</span>
                  <span className="text-stone-600 text-[11px]">48-hour slow fermentation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Image: Cozy Modern Cafe Space */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80">
                <Image
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
                  alt="Cozy modern sunlit cafe interior at Maccafe"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Overlay Text in Main Image */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>The Maccafe Sanctuary</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold">
                    Cozy, Modern Architecture
                  </h3>
                  <p className="text-stone-200 text-xs mt-1">
                    Natural timber, exposed brick, and warm ambient sunlight in SoHo.
                  </p>
                </div>
              </div>

              {/* Floating Card: Daily Fresh Bake */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-stone-200/80 max-w-[250px]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden relative shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&q=80"
                      alt="Sourdough Cinnamon Bun"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                      Oven Fresh at 10 AM
                    </span>
                    <p className="text-xs font-semibold text-stone-900 leading-tight">
                      Sourdough Cinnamon Bun
                    </p>
                    <span className="text-[11px] text-amber-700 font-bold">$5.50 • Cardamom & Butter</span>
                  </div>
                </div>
              </div>

              {/* Floating Card: Rating */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-2xl shadow-lg border border-stone-200/80 flex items-center gap-2.5">
                <div className="flex text-amber-400">
                  {"★★★★★"}
                </div>
                <div className="text-xs">
                  <span className="font-bold text-stone-900">4.9 / 5</span>
                  <span className="text-stone-500 block text-[10px]">850+ verified reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
