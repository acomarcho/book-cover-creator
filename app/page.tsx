"use client";

import { useState } from "react";
import BookCover from "@/components/BookCover";
import InputPanel from "@/components/InputPanel";
import { BookCoverData } from "@/types";

export default function Home() {
  const [bookData, setBookData] = useState<BookCoverData>({
    author: "",
    title: "",
    subtitle: "",
    svg: "",
    backgroundColor: "bg-yellow-200",
    textColor: "text-yellow-800",
    svgColor: "fill-yellow-800",
  });

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <BookCover bookData={bookData} />
        <InputPanel bookData={bookData} setBookData={setBookData} />
      </div>
    </main>
  );
}
