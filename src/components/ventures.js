import ventures from "@/data/ventures.json";
import Link from "next/link";
import { ArrowUpRight } from "react-feather";

export default function Ventures() {
  return (
    <div className="py-5 md:py-10 w-full px-8 md:px-16 bg-[#AD8DC5] overflow-clip">
      <div className="flex text-white text-2xl justify-between items-center">
        <h3>My Ventures</h3>
        <div className="flex items-center gap-x-2 text-xl">
          <p>View all</p>
          <ArrowUpRight />
        </div>
      </div>
      <div className="text-black flex py-7 space-x-20 scroll-animation">
        {ventures["ventures"].map((e) => {
          return (
            <img
              key={e.title}
              src={e.image}
              className="w-24 h-24 cursor-pointer"
              onClick={() => {
                window.open(e.route, "_blank");
              }}
            />
          );
        })}
        {ventures["ventures"].map((e) => {
          return (
            <img
              key={e.title}
              src={e.image}
              className="w-24 h-24 cursor-pointer"
              onClick={() => {
                window.open(e.route, "_blank");
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
