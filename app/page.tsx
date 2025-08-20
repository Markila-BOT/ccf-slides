"use client";

import dynamic from "next/dynamic";

const PresentationSlides = dynamic(
  () => import("./components/PresentationSlides"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <PresentationSlides />
    </main>
  );
}
