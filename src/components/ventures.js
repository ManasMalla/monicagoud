import ventures from "@/data/ventures.json";
import { ArrowUpRight } from "react-feather";

export default function Ventures() {
  return (
    <div className="py-10 w-full px-16 bg-[#AD8DC5] overflow-clip">
      <div className="flex text-white text-2xl justify-between items-center">
        <h3>My Ventures</h3>
        <div className="flex items-center gap-x-2 text-xl">
          <p>View all</p>
          <ArrowUpRight />
        </div>
      </div>
      <div className="text-black flex py-7 space-x-20 scroll-animation">
        {ventures["ventures"].map((e) => {
          return <img src={e.image} className="w-24 h-24" />;
        })}
        {ventures["ventures"].map((e) => {
          return <img src={e.image} className="w-24 h-24" />;
        })}
      </div>
    </div>
  );
}
