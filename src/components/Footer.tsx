"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Coffee, Mail, ArrowRight, Check, Heart, Music, Send } from "lucide-react";
import { CAFE_INFO } from "@/data/cafeData";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#1C1008] text-[#F3EEE7] pt-16 pb-12 border-t border-amber-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Club Banner */}
        <div className="bg-[#2D1B10] border border-amber-900/60 rounded-3xl p-8 lg:p-10 mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                The Morning Dispatch
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Join The Daily Brew Coffee Club
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm max-w-xl">
                Receive 10% off your first whole-bean bag, home brewing recipes from our head barista, and invitations to our monthly cupping tastings.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="bg-emerald-950/60 border border-emerald-700/60 p-4 rounded-2xl flex items-center gap-3 text-emerald-300 text-sm">
                  <Check className="w-5 h-5 shrink-0" />
                  <span>Welcome to the club! Check your inbox for your 10% discount code.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-full bg-[#1F120A] border border-amber-900/80 text-white text-sm placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm transition-all shadow-md shrink-0 flex items-center justify-center gap-1.5"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 4 Column Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-amber-950/80">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center font-bold">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold text-white">
                The Daily Brew
              </span>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Artisan neighborhood coffee roastery and sourdough bakery established in 2018. Honoring the craft from seed to cup.
            </p>
            <div className="flex items-center gap-3 text-amber-300 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#2D1B10] flex items-center justify-center hover:bg-amber-500 hover:text-stone-950 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#2D1B10] flex items-center justify-center hover:bg-amber-500 hover:text-stone-950 transition-colors"
                aria-label="Cafe Spotify Playlist"
              >
                <Music className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-amber-300">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="#menu" className="hover:text-amber-200 transition-colors">
                  Daily Espresso & Pour-Overs
                </a>
              </li>
              <li>
                <a href="#roastery" className="hover:text-amber-200 transition-colors">
                  Single-Origin Bean Bags
                </a>
              </li>
              <li>
                <a href="#bean-finder" className="hover:text-amber-200 transition-colors">
                  Interactive Flavor Matcher
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-amber-200 transition-colors">
                  Direct-Trade Roasting Ritual
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-200 transition-colors">
                  Hours & Seating Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Sanctuary */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-amber-300">
              Sanctuary Hours
            </h4>
            <div className="space-y-1.5 text-xs text-stone-400">
              <p>
                <strong className="text-stone-200">Mon – Fri:</strong> 6:30 AM – 6:00 PM
              </p>
              <p>
                <strong className="text-stone-200">Saturday:</strong> 7:00 AM – 7:00 PM
              </p>
              <p>
                <strong className="text-stone-200">Sunday:</strong> 7:30 AM – 5:00 PM
              </p>
              <p className="pt-2 text-amber-200/80 font-medium">
                Fresh morning bakes emerge daily at 7:00 AM.
              </p>
            </div>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-amber-300">
              Connect
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p>{CAFE_INFO.address}</p>
              <p>{CAFE_INFO.city}</p>
              <p className="pt-1">
                <a href={`tel:${CAFE_INFO.phone}`} className="hover:text-amber-200">
                  {CAFE_INFO.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${CAFE_INFO.email}`} className="hover:text-amber-200">
                  {CAFE_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} The Daily Brew Coffee Roasters. All rights reserved.</p>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Roasted and baked with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for our neighborhood.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
