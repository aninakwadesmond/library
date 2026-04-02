function Image_Content({ name, price, cart }) {

  console.log('cart available', cart)
  const {image, title, quantity=0, formats=[], download_count, id, bookshelves=[], amountByQuantity=''} = cart
  return (
    <div className="flex w-full items-center justify-start gap-2">
      <div className="flex-cols flex h-10 max-w-20 items-center justify-center">
        <img src={`${image || formats['image/jpeg']}default=false`} alt="image" className="h-[90%] w-[90%]" onError={e=> e.target.src = "/designs/book.jpg"}/>
      </div>
      <div className="flex h-10 flex-col items-start justify-center gap-1">
        <h6 className="line-clamp-1 text-[11px] font-bold tracking-tight text-gray-600">
          {title}
        </h6>
        <p className="text-[12px] font-bold tracking-tight text-green-500">
         ₵ {amountByQuantity|| price} 
        </p>
      </div>
    </div>
  );
}

export default Image_Content;
