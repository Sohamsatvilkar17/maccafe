"use client";

import React from "react";
import Image from "next/image";
import { Leaf, Award, Heart, ShieldCheck, SunMedium } from "lucide-react";

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
                  alt="Vintage espresso machine and warm cup at The Daily Brew"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 rounded-2xl bg-[#F0E6D8] border border-[#DFCBB5] text-stone-800">
                <span className="font-serif text-3xl font-bold text-amber-900 block mb-1">
                  100%
                </span>
                <span className="text-xs sm:text-sm font-semibold text-stone-900 block">
                  Direct Farm Sourced
                </span>
                <p className="text-xs text-stone-600 mt-1">
                  Direct partnership contracts that support sustainable farmer livelihoods.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-5 rounded-2xl bg-[#3B2214] text-amber-50">
                <span className="font-serif text-3xl font-bold text-amber-300 block mb-1">
                  5:00 AM
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white block">
                  Dawn Baking Ritual
                </span>
                <p className="text-xs text-amber-200/80 mt-1">
                  Pure French butter, long fermented laminated doughs, baked before sunrise.
                </p>
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                  alt="Sunlit cafe interior with plants and natural timber"
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
              <span>Our Roots & Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#24130A] leading-tight">
              A slower, richer way <br />
              <span className="italic font-normal text-amber-800">to start your day.</span>
            </h2>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
              Founded in 2018 in a restored brick foundry in Portland’s Artisan Quarter,{" "}
              <strong className="text-stone-950 font-medium">The Daily Brew</strong> was born from a simple belief:
              coffee should never be treated as mere fuel. It is an agricultural wonder, an ancient ritual, and a celebration of human craft.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Every bean on our counter is roasted in-house in small 6-kilo batches on our cast-iron San Franciscan roaster. 
              We highlight sweetness, fruit clarity, and clean finishes rather than charred bitterness. 
              Alongside our coffee, our pastry kitchen kneads naturally leavened sourdoughs and folds dozens of butter layers to ensure your morning bite is warm and memorable.
            </p>

            {/* Core Values checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-200">
              <div className="flex items-start gap-3">
                <Leaf className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Direct Trade Ethics</h4>
                  <p className="text-xs text-stone-600">Paying up to 180% of Fairtrade benchmark prices directly to growers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Community Hearth</h4>
                  <p className="text-xs text-stone-600">Welcoming seats, dog-friendly garden patio, and zero rushed tables.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Zero Artificial Preservatives</h4>
                  <p className="text-xs text-stone-600">House-made syrups infused with whole spices, vanilla pods, and organic berries.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">Master Extraction</h4>
                  <p className="text-xs text-stone-600">Custom mineral-balanced water and refractometer-verified TDS extraction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
