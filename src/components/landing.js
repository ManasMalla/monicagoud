import { useEffect } from "react";
import { Globe, Instagram, Linkedin, Twitter } from "react-feather";

export default function Landing() {
  return (
    <div className="bg-[#AD8DC5] w-full  py-20 px-16">
      <div className="flex gap-x-12 w-full">
        <div className="grow space-y-6">
          <div className="flex items-center gap-x-4">
            <div className="w-10 h-[2px] bg-white" />
            <h1>Venturing is my ikigai</h1>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Hello, I'm Monica Goud</h2>
            <p className="w-[42ch]">
              a seasoned startup mentor with three years of experience dedicated
              to guiding and enhancing the success of innovative startups. Let's
              embark on a journey of turning ideas into thriving businesses
              together.
            </p>
          </div>
          <div className="space-x-4">
            <button className="px-4 py-3 bg-white text-black rounded-xl">
              View More
            </button>
            <button className="px-4 py-3 text-white border-2 rounded-xl">
              Contact Me
            </button>
          </div>
          <div className="flex gap-x-4">
            <Instagram />
            <Twitter />
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
      <div className="h-20" />
      <div className="bg-[#FFDFE8]/50 py-9 w-full text-center rounded-2xl">
        <p className="font-semibold text-xl">Want to know more about?</p>
        <p>Here is my story :&#41;</p>
      </div>
    </div>
  );
}
