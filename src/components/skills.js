import skills from "../data/skills.json";
import { Info } from "react-feather";

export default function Skills() {
  return (
    <div className="bg-[#AD8DC5] w-full py-20 px-16 flex">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          lectus massa, semper et feugiat nec, luctus quis leo. Maecenas vel
          orci ut orci tincidunt euismod a at ipsum. Nulla dapibus vitae nisi
          nec condimentum.
        </p>
      </div>
      <div className="grid grid-cols-3 grow gap-8 ml-24">
        {skills["skills"].slice(0, 6).map((item, index) => {
          return (
            <div
              key={index}
              className="aspect-[1.26] w-full bg-white text-black p-10 py-12 h-full space-y-4"
            >
              <Info />
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
