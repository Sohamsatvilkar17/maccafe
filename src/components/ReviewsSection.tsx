"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Quote, Heart, MessageSquarePlus, Check } from "lucide-react";
import { REVIEWS } from "@/data/cafeData";

export default function ReviewsSection() {
  const [reviewsList, setReviewsList] = useState(REVIEWS);
  const [showAddForm, setShowAddForm] = useState(false);
  const [author, setAuthor] = useState("");
  const [role, setRole] = useState("");
  const [comment, setComment] = useState("");
  const [favoriteItem, setFavoriteItem] = useState("Ethiopia Guji V60");
  const [success, setSuccess] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    const newRev = {
      id: `rev-${Date.now()}`,
      author: author || "Local Guest",
      role: role || "Coffee Lover",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      comment,
      favoriteItem,
      date: "Just now",
    };
    setReviewsList([newRev, ...reviewsList]);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setShowAddForm(false);
      setAuthor("");
      setRole("");
      setComment("");
    }, 2000);
  };

  return (
    <section id="reviews" className="py-20 bg-[#FAF7F2] border-b border-[#EBDDCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2">
              <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
              <span>Community Love & Press</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#24130A] tracking-tight">
              Words From Our Regulars
            </h2>
            <p className="text-stone-600 text-base mt-2 max-w-xl">
              From dawn commuters to weekend sourdough brunchers, here is why neighbors make us their daily sanctuary.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-stone-200 shadow-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-stone-900">4.9 / 5.0</span>
                <span className="text-stone-500 block text-[11px]">1,200+ Verified Reviews</span>
              </div>
            </div>

            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs sm:text-sm font-semibold transition-colors"
            >
              <MessageSquarePlus className="w-4 h-4 text-amber-800" />
              <span>{showAddForm ? "Cancel" : "Share Your Note"}</span>
            </button>
          </div>
        </div>

        {/* Add Review Drawer / Form */}
        {showAddForm && (
          <div className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-amber-300 shadow-lg animate-in slide-in-from-top-4 duration-300">
            {success ? (
              <div className="text-center py-6 text-emerald-700 font-semibold flex items-center justify-center gap-2">
                <Check className="w-5 h-5" />
                <span>Thank you! Your words have been added to our community board.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4 max-w-2xl mx-auto">
                <h3 className="font-serif text-xl font-bold text-stone-900 text-center">
                  Share Your Daily Brew Experience
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="e.g. Maya Lin"
                      className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-amber-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Your Favorite Drink or Bake</label>
                    <input
                      type="text"
                      required
                      value={favoriteItem}
                      onChange={(e) => setFavoriteItem(e.target.value)}
                      placeholder="e.g. Cardamom Cortado & Croissant"
                      className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-amber-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Your Review / Story</label>
                  <textarea
                    required
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tell us what you love about the morning roast, atmosphere, or staff..."
                    className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-amber-800"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 rounded-full text-stone-600 text-xs font-medium hover:bg-stone-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-[#3B2214] text-amber-50 text-xs sm:text-sm font-semibold hover:bg-[#27150B]"
                  >
                    Post to Board
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-amber-200" />
                </div>

                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0">
                    <Image
                      src={rev.avatar}
                      alt={rev.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900 text-xs sm:text-sm leading-tight">
                      {rev.author}
                    </h4>
                    <span className="text-[11px] text-stone-500 block">
                      {rev.role}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] text-amber-800 font-semibold px-2 py-0.5 rounded-full bg-amber-50">
                  {rev.favoriteItem.split(" ")[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
