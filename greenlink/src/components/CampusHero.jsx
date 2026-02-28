import React from "react";
import crown from "../assets/crown.svg";

export default function CampusHero({ openModal }) {
  return (
    <div
      className="relative bg-white p-4 rounded-2xl shadow-lg flex flex-col space-y-3 hover:scale-105 transition-transform cursor-pointer"
      onClick={openModal}
    >
      <div className="flex items-center space-x-3">
        <img src={crown} className="h-8 w-8 animate-bounce" alt="Crown" />
        <div>
          <h2 className="font-bold text-lg">Greenfield College</h2>
          <p className="text-sm text-gray-500">Rank #1</p>
        </div>
      </div>
      <p className="font-semibold text-green-500 text-xl">1200 Green Points</p>
      <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition w-full">
        View Sustainability Proof
      </button>
    </div>
  );
}