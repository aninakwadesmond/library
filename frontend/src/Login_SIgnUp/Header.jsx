function Header({ image, children, width = "w-30" }) {
  return (
    <div className="flex-placecenter w-full gap-4">
      <div className="flex w-full flex-col items-center justify-center gap-3">
        {image && (
          <div className={`flex-placecenter ${width}`}>
            <img
              src={image}
              alt="image of kids at the library"
              className="w-[90%] cursor-pointer rounded-md object-center transition duration-300 hover:scale-105"
            />
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

export default Header;
