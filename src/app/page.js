"use client";
import Landing from "@/components/landing.js";
import Work from "@/components/work";
import Skills from "@/components/skills";
import Ventures from "@/components/ventures";
import LeadershipPrograms from "@/components/leadership-programs";
import Certificates from "@/components/certificates";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Landing />
      <Work />
      <Skills />
      <Certificates />
      <Ventures />
      <LeadershipPrograms />

      <div className="w-screen flex flex-col-reverse md:flex-row justify-between items-start gap-y-4 md:items-center px-8 py-5 md:px-16 md:py-10 text-xl bg-[#DDAFCC] ">
        <div>
          <p className="font-bold">monica goud</p>
          <p className="font-light w-56 text-base">
            Turning ideas into thriving businesses together
          </p>
        </div>
        <ul className="hidden md:flex gap-x-8">
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
