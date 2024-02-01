import { ArrowUpRight } from "react-feather";
import work from "../data/work.json";
export default function Work() {
  return (
    <div className="text-black p-8 md:p-16 space-y-6">
      <div className="flex text-[#5D57A1] text-2xl justify-between items-center">
        <h3>My Work</h3>
        <div className="flex items-center gap-x-2 text-xl">
          <p>View all</p>
          <ArrowUpRight />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-x-8 gap-y-6">
        {work["work"].map((item) => {
          return (
            <div
              key={item.title}
              className="rounded-xl overflow-hidden aspect-[1.2] relative"
            >
              <img src={item.image} className="peer h-full object-cover" />
              <div className="opacity-0 peer-hover:opacity-100 hover:opacity-100 transition duration-200 h-full w-full z-10 absolute top-0 flex items-center justify-center bg-black/50">
                <div className="p-4 bg-white rounded-md text-start w-min space-y-2">
                  {item.title.length > 40 ? (
                    <p className="text-xl">{item.title}</p>
                  ) : (
                    <p className="text-2xl  w-[14ch]">{item.title}</p>
                  )}
                  <p className="line-clamp-5 w-[32ch] text-sm">
                    {item.description}
                  </p>
                  <button className="text-sm py-1 px-3 bg-[#AD8DC5] text-white rounded-md">
                    Read more..
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
