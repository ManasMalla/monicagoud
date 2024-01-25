"use client";
import { useEffect } from "react";
import work from "../data/work.json";
import { Globe, Instagram, Linkedin } from "react-feather";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 px-16">
      <div className="flex gap-x-12 w-full">
        <div className="grow space-y-6">
          <div className="flex items-center gap-x-4">
            <div className="w-10 h-[2px] bg-white" />
            <h1>Lorem Ipsum dolor amet sit</h1>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Lorem Ipsum dolor amet sit</h2>
            <p className="w-[42ch]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              lectus massa, semper et feugiat nec, luctus quis leo. Maecenas vel
              orci ut orci tincidunt euismod a at ipsum. Nulla dapibus vitae
              nisi nec condimentum.
            </p>
          </div>
          <div className="space-x-4">
            <button className="px-4 py-3 bg-white text-black rounded-xl">
              Lorem ipsum
            </button>
            <button className="px-4 py-3 text-white border-2 rounded-xl">
              Lorem ipsum
            </button>
          </div>
          <div className="flex gap-x-4">
            <Instagram />
            <Linkedin />
            <Globe />
          </div>
          <div className="flex gap-x-4">
            <span class="material-symbols-outlined">campaign</span>
            <ul className="flex gap-x-4 opacity-75">
              <li>Hindi</li>
              <li>English</li>
              <li>Telugu</li>
            </ul>
          </div>
        </div>
        <img src="/landing.png" className="h-96" />
      </div>
      {/* <p>{work["work"][0].title}</p>
      <p>{work["work"][0].description}</p> */}
    </main>
  );
}
