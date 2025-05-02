"use client";

import dynamic from "next/dynamic";

const WorshipSlides = dynamic(() => import("./components/WorshipSlides"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <WorshipSlides />
    </main>
  );
}
