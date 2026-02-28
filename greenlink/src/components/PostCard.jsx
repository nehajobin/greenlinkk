import React from "react";

const typeColors = {
  initiative: "bg-green-100 border-green-500",
  pending: "bg-orange-100 border-orange-500",
  escalated: "bg-red-100 border-red-500",
};

export default function PostCard({ post, role, openModal }) {
  return (
    <div
      className={`border-l-4 ${typeColors[post.type]} bg-white p-4 rounded-xl shadow hover:shadow-md transition cursor-pointer`}
      onClick={() => openModal(`${post.title} - ${post.description}`)}
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold">{post.title}</h4>
        <span className="text-sm text-gray-500">{post.date}</span>
      </div>
      <p className="text-gray-600 mb-2">{post.description}</p>
      <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
        <span>👍 {post.likes} Likes</span>
        <span>💬 {post.comments} Comments</span>
      </div>
      {role === "authority" && post.type !== "initiative" && (
        <button className="mt-2 py-1 px-3 bg-green-500 text-white rounded hover:bg-green-600 transition">
          Take Action
        </button>
      )}
    </div>
  );
}