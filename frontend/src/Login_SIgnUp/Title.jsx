function Title({ heading, text }) {
  return (
    <div className="flex-col-start gap-2">
      <h2 className="w-full text-center text-[1.3rem] font-bold tracking-normal text-gray-600 capitalize">
        Sign in
      </h2>
      <p className="text-[11px] font-semibold text-gray-400">
        Enter valid user name & password to continue
      </p>
    </div>
  );
}

export default Title;
