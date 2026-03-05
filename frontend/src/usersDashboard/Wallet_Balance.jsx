function Wallet_Balance() {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-1">
      <div className="flex flex-col items-start justify-center">
        <p className="text-[10px] font-bold text-gray-600">
          Your current balance is
        </p>
        <p className="text-[12px] font-bold tracking-normal text-green-500">
          300 $
        </p>
      </div>
      <div className="flex h-20 w-full flex-col items-center justify-center">
        <img
          src="/designs/book.jpg"
          alt="book-image"
          className="h-[90%] w-[90%] object-center"
        />
      </div>
    </div>
  );
}

export default Wallet_Balance;
