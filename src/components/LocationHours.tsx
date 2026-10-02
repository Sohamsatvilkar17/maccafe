"use client";

import React from "react";
import { Clock, MapPin, Phone, Mail, Wifi, PawPrint, Bike, Coffee, Navigation } from "lucide-react";
import { CAFE_INFO } from "@/data/cafeData";

export default function LocationHours() {
  const currentDayIndex = new Date().getDay(); // 0 is Sunday, 6 is Saturday

  const schedule = [
    { day: "Monday", hours: "10:00 AM – 8:00 PM", active: currentDayIndex === 1 },
    { day: "Tuesday", hours: "10:00 AM – 8:00 PM", active: currentDayIndex === 2 },
    { day: "Wednesday", hours: "10:00 AM – 8:00 PM", active: currentDayIndex === 3 },
    { day: "Thursday", hours: "10:00 AM – 8:00 PM", active: currentDayIndex === 4 },
    { day: "Friday", hours: "10:00 AM – 8:00 PM", active: currentDayIndex === 5 },
    { day: "Saturday", hours: "10:00 AM – 8:00 PM", active: currentDayIndex === 6 },
    { day: "Sunday", hours: "10:00 AM – 8:00 PM", active: currentDayIndex === 0 },
  ];

  return (
    <section id="location" className="py-20 bg-[#F5EFE6] border-b border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-900/10 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-amber-800" />
            <span>Visit Our SoHo Space</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#24130A]">
            Hours, Location & Atmosphere
          </h2>
          <p className="text-stone-600 text-base mt-2">
            Located on historic cobblestone Mercer Street in SoHo. An open, cozy, modern space for espresso, warm sourdough, and conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Hours Schedule Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-md">
            <div className="flex items-center gap-2.5 mb-6 text-stone-900">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Daily Hours</h3>
                <span className="text-xs text-stone-500 font-medium text-amber-900">
                  Open 10 AM – 8 PM Daily (7 Days a Week)
                </span>
              </div>
            </div>

            <div className="space-y-2.5">
              {schedule.map((item) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between p-2.5 rounded-xl text-xs sm:text-sm transition-colors ${
                    item.active
                      ? "bg-amber-100/70 border border-amber-300 font-bold text-amber-950"
                      : "text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.active && (
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    )}
                    <span>{item.day}</span>
                    {item.active && (
                      <span className="text-[10px] font-semibold uppercase px-1.5 py-0.2 bg-emerald-100 text-emerald-800 rounded">
                        Today
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-xs">{item.hours}</span>
                </div>
              ))}
            </div>

            {/* Direct Contact */}
            <div className="pt-6 mt-6 border-t border-stone-200 space-y-2 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-800 shrink-0" />
                <a href={`tel:${CAFE_INFO.phone}`} className="hover:text-amber-900 font-medium">
                  {CAFE_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-800 shrink-0" />
                <a href={`mailto:${CAFE_INFO.email}`} className="hover:text-amber-900 font-medium">
                  {CAFE_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Location & Amenities */}
          <div className="lg:col-span-7 space-y-6">
            {/* Visual Location Card */}
            <div className="bg-[#3B2214] text-amber-50 p-6 sm:p-8 rounded-3xl shadow-md border border-amber-950 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Our SoHo Space
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white mt-1">
                      {CAFE_INFO.address}
                    </h3>
                    <p className="text-amber-200/80 text-sm mt-0.5">
                      {CAFE_INFO.city} (Between Prince & Houston St)
                    </p>
                  </div>

                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold transition-all shadow-sm shrink-0"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                  Steps away from Prince St (R, W train) and Broadway-Lafayette (B, D, F, M). Street parking and nearby Mercer garage access.
                </p>
              </div>

              {/* Cafe Amenities Bar */}
              <div className="pt-6 border-t border-amber-900/50">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-3">
                  Cozy & Modern Amenities
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2 bg-[#2D1B10] p-2.5 rounded-xl border border-amber-900/30">
                    <Wifi className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-stone-200">High-Speed Wi-Fi</span>
                  </div>

                  <div className="flex items-center gap-2 bg-[#2D1B10] p-2.5 rounded-xl border border-amber-900/30">
                    <PawPrint className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-stone-200">Dog Friendly</span>
                  </div>

                  <div className="flex items-center gap-2 bg-[#2D1B10] p-2.5 rounded-xl border border-amber-900/30">
                    <Bike className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-stone-200">Citi Bike Nearby</span>
                  </div>

                  <div className="flex items-center gap-2 bg-[#2D1B10] p-2.5 rounded-xl border border-amber-900/30">
                    <Coffee className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-stone-200">Oat & Almond Milk</span>
                  </div>

                  <div className="flex items-center gap-2 bg-[#2D1B10] p-2.5 rounded-xl border border-amber-900/30 col-span-2 sm:col-span-2">
                    <span className="text-xs text-stone-200">⚡ Laptop power plugs & quiet reading corners</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
