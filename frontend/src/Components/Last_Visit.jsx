import Card from "./Card";

function Last_Visit() {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-y-3 rounded-md p-2 shadow-lg shadow-gray-300">
      <div className="flex w-full items-center justify-between [&_span]:cursor-pointer">
        <span className="text-[14px] font-bold tracking-tight text-red-400 capitalize">
          last visits
        </span>
        <span className="text-[11px] font-bold tracking-tighter text-gray-400 capitalize">
          See All
        </span>
      </div>
      <div className="grid w-full grid-cols-2 justify-items-center gap-x-3 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Last_Visit;
