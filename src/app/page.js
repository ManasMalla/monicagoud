"use client";
import Landing from "@/components/landing.js";
import Work from "@/components/work";
import Skills from "@/components/skills";
import Ventures from "@/components/ventures";
import LeadershipPrograms from "@/components/leadership-programs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Landing />
      <Work />
      <Skills />
      <div className="py-10"></div>
      <Ventures />
      <LeadershipPrograms />

      <div className="w-screen flex justify-between items-center px-16 py-10 text-xl bg-[#DDAFCC] ">
        <div>
          <p className="font-bold">monica goud</p>
          <p className="font-light w-56 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <ul className="flex gap-x-8">
          <li>
            <a>work</a>
          </li>
          <li>
            <a>about</a>
          </li>
          <li>
            <a>contact</a>
          </li>
        </ul>
        <button className="bg-white px-4 py-1 rounded-md text-base text-[#5D57A1] font-semibold">
          resume
        </button>
      </div>
    </main>
  );
}
