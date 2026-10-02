"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, Users, MapPin, CheckCircle, Sparkles, Coffee } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ReservationModal() {
  const { isReservationOpen, setIsReservationOpen } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [partySize, setPartySize] = useState("2 guests");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00 AM");
  const [zone, setZone] = useState("Sunlit Window Bench");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  // Set default date to today
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
  }, []);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isReservationOpen) {
        setIsReservationOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isReservationOpen, setIsReservationOpen]);

  if (!isReservationOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = "DB-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setIsReservationOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-200 relative animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="reservation-title"
      >
        {/* Close Button */}
        <button
          onClick={() => setIsReservationOpen(false)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors z-10"
          aria-label="Close reservation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Confirmation View */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Reservation Confirmed
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                We Saved Your Table!
              </h3>
              <p className="text-stone-600 text-sm mt-2 max-w-sm mx-auto">
                Thank you, <strong className="text-stone-900">{name}</strong>. A confirmation has been sent to{" "}
                <span className="text-amber-900 font-medium">{email || "your email"}</span>.
              </p>
            </div>

            {/* Reservation Summary Ticket */}
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EBDDCF] text-left text-xs sm:text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-stone-500">Booking Reference:</span>
                <span className="font-mono font-bold text-amber-900">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Date & Time:</span>
                <span className="font-medium text-stone-900">{date} at {time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Seating Area:</span>
                <span className="font-medium text-stone-900">{zone} ({partySize})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Location:</span>
                <span className="font-medium text-stone-900">428 Elmwood Grove</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="w-full py-3 rounded-full bg-[#3B2214] text-amber-50 font-medium text-sm hover:bg-[#27150B] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Complimentary Table & Tasting Booking</span>
              </div>
              <h2
                id="reservation-title"
                className="font-serif text-2xl sm:text-3xl font-bold text-stone-900"
              >
                Reserve Your Experience
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm mt-1">
                Enjoy guaranteed seating in our cafe lounge or sunny courtyard garden.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Jordan Harper"
                    className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jordan@example.com"
                    className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Party Size
                  </label>
                  <select
                    value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-800"
                  >
                    <option value="1 guest">Solo (1 guest)</option>
                    <option value="2 guests">2 guests</option>
                    <option value="3-4 guests">3 - 4 guests</option>
                    <option value="5-8 guests">5 - 8 guests</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Time Slot
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-800"
                  >
                    <option value="7:30 AM">7:30 AM (Dawn Pour)</option>
                    <option value="8:30 AM">8:30 AM</option>
                    <option value="10:00 AM">10:00 AM (Brunch Rush)</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:30 PM">2:30 PM (Afternoon Brew)</option>
                    <option value="4:00 PM">4:00 PM (Quiet Hour)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Preferred Seating Ambience
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    "Sunlit Window Bench",
                    "Cozy Hearth Lounge",
                    "Sunny Garden Patio",
                    "Barista Pour-Over Bar",
                  ].map((z) => (
                    <button
                      type="button"
                      key={z}
                      onClick={() => setZone(z)}
                      className={`p-2 rounded-xl text-left border transition-all cursor-pointer ${
                        zone === z
                          ? "bg-amber-100 text-amber-900 border-amber-300 font-semibold"
                          : "bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100"
                      }`}
                    >
                      {z}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Special Notes or Coffee Preferences (Optional)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Celebrating a birthday, dairy-free preference, high chair needed"
                  className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-800"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#3B2214] hover:bg-[#27150B] text-amber-50 font-semibold text-sm shadow-md transition-all active:scale-98"
                >
                  Confirm Table Reservation
                </button>
                <p className="text-[11px] text-center text-stone-500 mt-2">
                  No cancellation fees. We hold tables for 15 minutes past reservation time.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
