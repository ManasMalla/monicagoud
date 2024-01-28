export default function LeadershipPrograms() {
  return (
    <div className="py-10 w-full px-16 bg-[#AD8DC5] overflow-clip space-y-4">
      <div className="flex text-white text-3xl justify-center items-center text-center font-semibold">
        <h3>Leadership Programs</h3>
      </div>

      <div className="flex justify-center gap-x-8 py-8">
        <img src="leadership-programs/vdc.png" className="h-14" />
        <img
          src="leadership-programs/northeastern-center-e-education.png"
          className="h-14"
        />
        <img src="leadership-programs/northeastern.png" className="h-14" />
        <img
          src="leadership-programs/northeastern-markets.png"
          className="h-14"
        />
        <img src="leadership-programs/itic.png" className="h-14" />
      </div>
    </div>
  );
}
