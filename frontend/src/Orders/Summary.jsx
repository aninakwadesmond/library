function Summary({ price, title, message, s_style, edit }) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center justify-start gap-x-5">
        <p
          className={`text-[14px] font-bold tracking-tight text-gray-400 capitalize ${s_style}`}
        >
          {title}
        </p>
        <p className="text-[14px] font-bold tracking-tight text-gray-400">
          {message}
        </p>
      </div>
      {edit ? (
        <button className="cursor-pointer border-0 p-1 text-[13px] font-bold text-blue-500 outline-0 md:text-[16px]">
          Edit
        </button>
      ) : (
        <p
          className={`text-[14px] font-bold tracking-tight text-gray-400 ${s_style}`}
        >
          ${price.toFixed(2)}
        </p>
      )}
    </div>
  );
}

export default Summary;
