"use client";

import { BookCoverData } from "@/types";

const colorOptions = [
  { bg: "bg-yellow-200", text: "text-yellow-800", svg: "fill-yellow-800" },
  { bg: "bg-green-200", text: "text-green-800", svg: "fill-green-800" },
  { bg: "bg-blue-200", text: "text-blue-800", svg: "fill-blue-800" },
  { bg: "bg-red-200", text: "text-red-800", svg: "fill-red-800" },
  { bg: "bg-purple-200", text: "text-purple-800", svg: "fill-purple-800" },
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
          {colorOptions.map((color) => (
            <button
              key={color.bg}
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
