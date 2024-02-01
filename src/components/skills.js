import skills from "../data/skills.json";
import { Info } from "react-feather";

export default function Skills() {
  return (
    <div className="bg-[#AD8DC5] w-full py-10 md:py-20 px-8 md:px-16 flex flex-col md:flex-row gap-y-8">
      <div className="space-y-4">
        <p className="uppercase">My Skills</p>
        <h3 className="text-4xl">
          Building
          <br />
          products for
          <br />
          humans
        </h3>
        <p className="w-[25ch]">
          With my startup background, I bring a lean mindset for building
          products fast and my project management background uniquely connects
          me to building products that understand and enhance user experiences.
        </p>
      </div>
      <div className="grid md:grid-cols-3 grow gap-8 md:ml-24">
        {skills["skills"].slice(0, 6).map((item, index) => {
          return (
            <div
              key={index}
              className="aspect-[1.26] w-full bg-white text-black p-10 py-12 h-full space-y-4"
            >
              {item.image == "" ? (
                <Info />
              ) : (
                <img src={item.image} className="w-7 h-7" />
              )}
              <div className="space-y-1">
                <p>{item.title}</p>
                <p className="text-sm line-clamp-4 opacity-50">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
