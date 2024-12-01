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
        className={`w-[300px] h-[400px] mx-auto ${bookData.backgroundColor} p-8 flex flex-col items-center justify-between`}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <p
            className={`${bookData.textColor} text-lg font-bold tracking-wide uppercase`}
          >
            {bookData.author}
          </p>
          <h1
            className={`${bookData.textColor} text-2xl font-bold tracking-wider uppercase`}
          >
            {bookData.title}
          </h1>
        </div>
        <div className="flex flex-col items-center gap-8">
          {bookData.svg && (
            <div
              className={`w-[80px] h-[80px] ${bookData.svgColor}`}
              dangerouslySetInnerHTML={{
                __html: bookData.svg.replace(/(width|height)="[^"]*"/g, ""),
              }}
            />
          )}
          <div className={`${bookData.textColor} text-center`}>
            <p className="text-md leading-tight">{bookData.subtitle}</p>
          </div>
        </div>
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
