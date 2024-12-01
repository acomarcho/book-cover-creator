"use client";

import { BookCoverData } from "@/types";
import { useCallback } from "react";
import html2canvas from "html2canvas";

interface BookCoverProps {
  bookData: BookCoverData;
}

export default function BookCover({ bookData }: BookCoverProps) {
  const downloadCover = useCallback(async () => {
    const coverElement = document.getElementById("book-cover");
    if (!coverElement) return;

    const canvas = await html2canvas(coverElement);
    const link = document.createElement("a");
    link.download = "book-cover.png";
    link.href = canvas.toDataURL();
    link.click();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div
        id="book-cover"
        className={`aspect-[2/3] w-full max-w-md mx-auto ${bookData.backgroundColor} p-8 flex flex-col items-center justify-between`}
      >
        <div className={`${bookData.textColor} text-center`}>
          <p className="text-xl font-medium">{bookData.author}</p>
        </div>
        <div className="flex flex-col items-center gap-6">
          {bookData.svg && (
            <div
              className={`w-32 h-32 ${bookData.svgColor}`}
              dangerouslySetInnerHTML={{ __html: bookData.svg }}
            />
          )}
          <div className={`${bookData.textColor} text-center`}>
            <h1 className="text-4xl font-bold mb-2">{bookData.title}</h1>
            <p className="text-xl">{bookData.subtitle}</p>
          </div>
        </div>
        <div className="h-8" /> {/* Spacer */}
      </div>

      <button
        onClick={downloadCover}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full max-w-md mx-auto"
      >
        Download Cover
      </button>
    </div>
  );
}
