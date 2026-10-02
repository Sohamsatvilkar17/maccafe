"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CAFE_INFO } from "@/data/cafeData";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    totalItems,
  } = useCart();

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [notes, setNotes] = useState("");

  if (!isCartOpen) return null;

  const taxes = subtotal * 0.08;
  const total = subtotal + taxes;

  const handleCheckout = () => {
    const num = "DB-" + Math.floor(1000 + Math.random() * 9000);
    setOrderNumber(num);
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
    }, 500);
  };

  const handleClose = () => {
    setIsCartOpen(false);
    setOrderPlaced(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Drawer Header */}
          <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-[#FAF7F2]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#3B2214] text-amber-100 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-stone-900 leading-tight">
                  Your Order Bag
                </h3>
                <span className="text-xs text-stone-500">
                  {totalItems} {totalItems === 1 ? "item" : "items"} selected for pick-up
                </span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-stone-200 text-stone-600 transition-colors"
              aria-label="Close bag drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderPlaced ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-stone-900">
                  Order Received!
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 max-w-xs mx-auto">
                  Our baristas and bakers have received your order. We are preparing it fresh right now.
                </p>

                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EBDDCF] text-stone-800 text-left text-xs space-y-2 mt-4">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Order Number:</span>
                    <span className="font-mono font-bold text-amber-900">{orderNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Estimated Pick-Up:</span>
                    <span className="font-semibold text-emerald-700">10 – 15 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Pick-Up Counter:</span>
                    <span className="font-medium text-stone-900">{CAFE_INFO.name}, {CAFE_INFO.address}</span>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="w-full mt-4 py-3 rounded-full bg-[#3B2214] text-amber-50 text-sm font-semibold hover:bg-[#27150B]"
                >
                  Back to Menu
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto mb-3" />
                <h4 className="font-serif text-lg font-bold text-stone-800">
                  Your bag is empty
                </h4>
                <p className="text-stone-500 text-xs sm:text-sm mt-1 max-w-xs mx-auto">
                  Explore our pour-overs, single origins, and morning croissants to build your order.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-5 px-5 py-2.5 rounded-full bg-amber-800 text-amber-50 text-xs font-semibold hover:bg-amber-900"
                >
                  Explore The Menu
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map(({ item, quantity }) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3.5 p-3 rounded-2xl border border-stone-200 bg-stone-50/50 hover:bg-stone-50 transition-colors"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden relative shrink-0 bg-stone-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h5 className="font-serif font-bold text-sm text-stone-900 truncate">
                        {item.name}
                      </h5>
                      <span className="text-xs text-amber-900 font-bold block">
                        ${(item.price * quantity).toFixed(2)}
                      </span>
                      <span className="text-[11px] text-stone-500">
                        ${item.price.toFixed(2)} each
                      </span>
                    </div>

                    {/* Quantity Adjustment Controls */}
                    <div className="flex items-center gap-1.5 bg-white border border-stone-200 rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-stone-800">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1.5 text-stone-400 hover:text-rose-600 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* Barista prep notes */}
                <div className="pt-2">
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Special Preparation Notes for Barista
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g., Extra hot, oat milk substitute, light ice"
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-amber-800"
                  />
                </div>

                {/* Estimated Prep Box */}
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center gap-2.5 text-xs text-amber-900">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>
                    Average prep time: <strong>10–12 minutes</strong> from checkout.
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Drawer Footer */}
          {!orderPlaced && cart.length > 0 && (
            <div className="p-6 border-t border-stone-200 bg-[#FAF7F2] space-y-3">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax (8%)</span>
                  <span>${taxes.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-stone-950 pt-1 border-t border-stone-200">
                  <span>Total Due</span>
                  <span className="font-serif text-base text-amber-900">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3.5 rounded-full bg-[#3B2214] hover:bg-[#27150B] text-amber-50 font-semibold text-sm shadow-md flex items-center justify-center gap-2 transition-all active:scale-98"
              >
                <span>Checkout for Counter Pickup</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={clearCart}
                className="w-full text-center text-xs text-stone-500 hover:text-rose-600 transition-colors py-1"
              >
                Clear all items from bag
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
