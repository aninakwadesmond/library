function Table_Item({ children }) {
  return (
    <tr className="w-full [&_td]:h-8 [&_td]:overflow-hidden [&_td]:text-start [&_td]:font-bold [&_td]:tracking-tight [&_td]:text-gray-500 [&_td]:capitalize">
      {children}
    </tr>
  );
}

export default Table_Item;
