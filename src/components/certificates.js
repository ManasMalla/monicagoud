import { ArrowUpRight } from "react-feather";
export default function Certificates() {
  return (
    <div className="w-full text-black p-16 space-y-6">
      <div className="flex text-[#5D57A1] text-2xl justify-between items-center">
        <h3>My Certificates</h3>
        <div className="flex items-center gap-x-2 text-xl">
          <p>View all</p>
          <ArrowUpRight />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-8 gap-y-6">
        {[
          "foundations-project-management.png",
          "project-initiation.png",
          "email-marketing.png",
          "interact-with-customers.png",
          "asess-for-success.png",
          "make-the-sale.png",
          "foundations-of-digital-marketing.png",
          "attract-and-engage-customers-with-digital-marketing.png",
        ]
          .splice(0, 6)
          .map((e) => {
            return <img key={e} src={`certificates/${e}`} />;
          })}
      </div>
    </div>
  );
}
