function SelectAll() {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-2">
      <p className="font-bold tracking-tight text-gray-600">Your cart (11)</p>
      <div className="w-full rounded-full border border-slate-200 p-1 shadow">
        <div className="flex w-full items-center justify-between rounded-full bg-white px-3 py-2 shadow">
          <div className="flex items-center justify-start gap-1">
            <input
              type="checkbox"
              name="all"
              id="checkbox"
              className="accent-gray-950"
            />
            <label
              htmlFor="checkbox"
              className="text-[10px] font-bold tracking-tight text-gray-600 capitalize"
            >
              select all
            </label>
          </div>
          <button className="w-15 cursor-pointer rounded-full border-0 bg-gray-900 px-1 py-1.25 text-[10px] font-bold tracking-tight text-gray-300 capitalize shadow">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default SelectAll;
