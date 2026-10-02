"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Coffee, ShoppingBag, Calendar, Menu as MenuIcon, X, Clock, MapPin, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CAFE_INFO } from "@/data/cafeData";

export default function Navbar() {
  const { totalItems, setIsCartOpen, setIsReservationOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simple calculation of open status (assumes normal day daytime)
  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    setIsOpenNow(hour >= 7 && hour < 18);
  }, []);

  const navLinks = [
    { label: "Our Story", href: "#story" },
    { label: "Menu", href: "#menu" },
    { label: "Roastery", href: "#roastery" },
    { label: "Flavor Finder", href: "#bean-finder" },
    { label: "Reviews", href: "#reviews" },
    { label: "Hours & Visit", href: "#location" },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#2D1B10] text-[#F3EEE7] text-xs py-2 px-4 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="flex h-2 w-2 relative">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                  isOpenNow ? "bg-emerald-400" : "bg-amber-400"
                } opacity-75`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${
                  isOpenNow ? "bg-emerald-500" : "bg-amber-500"
                }`}
              ></span>
            </span>
            <span className="text-amber-200">
              {isOpenNow ? "Open Today till 6:00 PM" : "Closed Now • Opens 6:30 AM Tomorrow"}
            </span>
            <span className="text-stone-400 hidden md:inline">•</span>
            <span className="text-stone-300 hidden md:inline">{CAFE_INFO.announcement}</span>
          </div>

          <div className="flex items-center gap-4 text-stone-300">
            <span className="hidden sm:flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              <span>Artisan Quarter, Portland</span>
            </span>
            <span className="hidden sm:inline text-stone-500">•</span>
            <a
              href={`tel:${CAFE_INFO.phone}`}
              className="hover:text-amber-200 transition-colors"
            >
              {CAFE_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFD3]"
            : "bg-[#FAF7F2] border-b border-[#F0E8DC]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-[#3B2214] flex items-center justify-center text-amber-100 shadow-md group-hover:scale-105 transition-transform">
              <Coffee className="w-6 h-6 stroke-[1.75]" />
            </div>
            <div>
              <span className="block font-serif text-2xl font-bold tracking-tight text-[#24130A] leading-tight">
                The Daily Brew
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-wider text-amber-900/70">
                Artisan Roastery & Bakehouse
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-stone-700 hover:text-amber-900 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-800 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Table Reservation Button */}
            <button
              onClick={() => setIsReservationOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-300 text-stone-800 text-sm font-medium hover:bg-stone-100 hover:border-stone-400 transition-colors shadow-xs"
            >
              <Calendar className="w-4 h-4 text-amber-800" />
              <span>Reserve Table</span>
            </button>

            {/* Cart / Pick Up Bag Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#3B2214] hover:bg-[#27150B] text-amber-50 text-sm font-medium transition-all shadow-sm active:scale-95"
              aria-label="View pickup order bag"
            >
              <ShoppingBag className="w-4 h-4 text-amber-200" />
              <span className="hidden md:inline">Order Bag</span>
              {totalItems > 0 && (
                <span className="flex items-center justify-center min-w-5 h-5 px-1.5 text-xs font-bold bg-amber-500 text-stone-950 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DFD3] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-stone-800 hover:text-amber-800 py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-stone-200 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsReservationOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-stone-300 text-stone-800 text-sm font-medium hover:bg-stone-100"
              >
                <Calendar className="w-4 h-4 text-amber-800" />
                <span>Reserve a Table</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#3B2214] text-amber-50 text-sm font-medium"
              >
                <ShoppingBag className="w-4 h-4 text-amber-200" />
                <span>View Order Bag ({totalItems} items)</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
