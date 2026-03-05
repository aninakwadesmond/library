function Image_Content({ name, price }) {
  return (
    <div className="flex w-full items-center justify-start gap-2">
      <div className="flex-cols flex h-10 max-w-20 items-center justify-center">
        <img src="/designs/book.jpg" alt="image" className="h-[90%] w-[90%]" />
      </div>
      <div className="flex h-10 flex-col items-start justify-center gap-1">
        <h6 className="line-clamp-1 text-[11px] font-bold tracking-tight text-gray-600">
          {name}
        </h6>
        <p className="text-[12px] font-bold tracking-tight text-green-500">
          {price} $
        </p>
      </div>
    </div>
  );
}

export default Image_Content;
