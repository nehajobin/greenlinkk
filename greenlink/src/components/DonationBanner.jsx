import React from "react";
import greenFund from "../assets/green-fund.jpg";

export default function DonationBanner() {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform">
      <img src={greenFund} className="w-full h-32 object-cover" alt="Green Fund" />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h3 className="text-white font-bold text-lg">Support the Green Fund 🌱</h3>
      </div>
    </div>
  );
}