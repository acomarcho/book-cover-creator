"use client";

import { BookCoverData } from "@/types";

const colorOptions = [
  // Light modes
  {
    bg: "bg-yellow-100",
    text: "text-yellow-900",
    svg: "fill-yellow-900 text-yellow-900",
  },
  {
    bg: "bg-green-100",
    text: "text-green-900",
    svg: "fill-green-900 text-green-900",
  },
  {
    bg: "bg-blue-100",
    text: "text-blue-900",
    svg: "fill-blue-900 text-blue-900",
  },
  { bg: "bg-red-100", text: "text-red-900", svg: "fill-red-900 text-red-900" },
  {
    bg: "bg-purple-100",
    text: "text-purple-900",
    svg: "fill-purple-900 text-purple-900",
  },
  {
    bg: "bg-pink-100",
    text: "text-pink-900",
    svg: "fill-pink-900 text-pink-900",
  },
  {
    bg: "bg-orange-100",
    text: "text-orange-900",
    svg: "fill-orange-900 text-orange-900",
  },
  {
    bg: "bg-teal-100",
    text: "text-teal-900",
    svg: "fill-teal-900 text-teal-900",
  },
  {
    bg: "bg-indigo-100",
    text: "text-indigo-900",
    svg: "fill-indigo-900 text-indigo-900",
  },

  // Dark modes
  {
    bg: "bg-gray-900",
    text: "text-gray-100",
    svg: "fill-gray-100 text-gray-100",
  },
  {
    bg: "bg-slate-900",
    text: "text-slate-100",
    svg: "fill-slate-100 text-slate-100",
  },
  {
    bg: "bg-zinc-900",
    text: "text-zinc-100",
    svg: "fill-zinc-100 text-zinc-100",
  },
  {
    bg: "bg-neutral-900",
    text: "text-neutral-100",
    svg: "fill-neutral-100 text-neutral-100",
  },
  {
    bg: "bg-stone-900",
    text: "text-stone-100",
    svg: "fill-stone-100 text-stone-100",
  },
  {
    bg: "bg-blue-900",
    text: "text-blue-100",
    svg: "fill-blue-100 text-blue-100",
  },
  {
    bg: "bg-indigo-900",
    text: "text-indigo-100",
    svg: "fill-indigo-100 text-indigo-100",
  },
  {
    bg: "bg-violet-900",
    text: "text-violet-100",
    svg: "fill-violet-100 text-violet-100",
  },
  {
    bg: "bg-purple-900",
    text: "text-purple-100",
    svg: "fill-purple-100 text-purple-100",
  },
  {
    bg: "bg-fuchsia-900",
    text: "text-fuchsia-100",
    svg: "fill-fuchsia-100 text-fuchsia-100",
  },
  {
    bg: "bg-pink-900",
    text: "text-pink-100",
    svg: "fill-pink-100 text-pink-100",
  },
  {
    bg: "bg-rose-900",
    text: "text-rose-100",
    svg: "fill-rose-100 text-rose-100",
  },
  {
    bg: "bg-green-900",
    text: "text-green-100",
    svg: "fill-green-100 text-green-100",
  },
  {
    bg: "bg-emerald-900",
    text: "text-emerald-100",
    svg: "fill-emerald-100 text-emerald-100",
  },
  {
    bg: "bg-teal-900",
    text: "text-teal-100",
    svg: "fill-teal-100 text-teal-100",
  },
  {
    bg: "bg-cyan-900",
    text: "text-cyan-100",
    svg: "fill-cyan-100 text-cyan-100",
  },
  { bg: "bg-red-900", text: "text-red-100", svg: "fill-red-100 text-red-100" },
  {
    bg: "bg-orange-900",
    text: "text-orange-100",
    svg: "fill-orange-100 text-orange-100",
  },
  {
    bg: "bg-amber-900",
    text: "text-amber-100",
    svg: "fill-amber-100 text-amber-100",
  },
];

interface InputPanelProps {
  bookData: BookCoverData;
  setBookData: (data: BookCoverData) => void;
}

export default function InputPanel({ bookData, setBookData }: InputPanelProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Author
        </label>
        <input
          type="text"
          value={bookData.author}
          onChange={(e) => setBookData({ ...bookData, author: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={bookData.title}
          onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Subtitle
        </label>
        <input
          type="text"
          value={bookData.subtitle}
          onChange={(e) =>
            setBookData({ ...bookData, subtitle: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          SVG Code
        </label>
        <textarea
          value={bookData.svg}
          onChange={(e) => setBookData({ ...bookData, svg: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows={4}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Color Scheme
        </label>
        <div className="flex gap-2 flex-wrap">
          {colorOptions.map((color, idx) => (
            <button
              key={idx}
              onClick={() =>
                setBookData({
                  ...bookData,
                  backgroundColor: color.bg,
                  textColor: color.text,
                  svgColor: color.svg,
                })
              }
              className={`w-8 h-8 rounded-full ${color.bg} border-2 ${
                bookData.backgroundColor === color.bg
                  ? "border-gray-800"
                  : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
