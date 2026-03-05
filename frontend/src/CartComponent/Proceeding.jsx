function Proceeding() {
  return (
    <div className="flex flex-col items-start justify-center gap-10">
      <div className="mt-3 flex w-full flex-col items-center justify-center gap-3">
        <h2 className="font-bold tracking-tighter text-gray-800 capitalize">
          Your Shopping Cart
        </h2>

        <div className="flex items-center justify-start gap-2">
          <TopNavigation number={1} text="Shopping cart" />
          <TopNavigation number={2} text="Shopping cart" />
          <TopNavigation number={3} text="Shopping cart" />
        </div>
      </div>
    </div>
  );
}

function TopNavigation({ number, text }) {
  return (
    <div className="flex items-center justify-start gap-2 border-b-2 border-gray-900 pr-5 pb-2 md:pr-10">
      <span className="flex h-6 w-6 flex-col items-center justify-center rounded-md bg-gray-900 p-1 text-[10px] font-bold text-gray-100">
        {number}
      </span>
      <p className="line-clamp-1 text-[10px] font-bold tracking-tighter text-gray-600">
        {text}
      </p>
    </div>
  );
}

export default Proceeding;
