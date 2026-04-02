import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SingleCard from "./SingleCard";

function OrderCard({ title, status, children, status_style, bottom }) {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-y-4 rounded-md border border-gray-200 bg-white pt-2 shadow-md ">
      <TopNav title={title} status={status} status_style={status_style} />
      <div className="flex w-full flex-col items-start justify-center gap-2 divide-y divide-gray-200 px-4 max-h-90 overflow-auto thin-y-scrollbar pt-40">
        {children}
      </div>
      <Action_Bottom bottom={bottom} />
    </div>
  );
}

function Action_Bottom({ bottom }) {
  const { text, button1, button2 } = bottom;
  return (
    <div className="flex w-full flex-col items-center justify-between gap-2 rounded-b-md bg-blue-100/30 px-2 py-2 md:flex-row">
      <p className="max-w-full truncate text-[13px] font-bold tracking-tight text-gray-500 md:max-w-[50%] lg:max-w-[65%]">
        {text}
      </p>
      <div className="flex w-full items-center justify-between gap-2 md:w-auto md:justify-start">
        <Buttom_Action action={button1} b_style="text-gray-500 bg-white" />
        <Buttom_Action action={button2} b_style="bg-blue-500 text-blue-100" />
      </div>
    </div>
  );
}

function Buttom_Action({ action, b_style }) {
  return (
    <button
      className={`cursor-pointer rounded-md border-0 px-2 py-1 tracking-tight shadow outline-0 ${b_style} text-[13px] font-semibold`}
    >
      {action}
    </button>
  );
}

function TopNav({ title, status, status_style }) {
  return (
    <div className="flex w-full items-center justify-between px-4">
      <div className="flex items-center justify-start gap-1">
        <span className="text-[13px] font-bold text-gray-600 capitalize">
          {title}
        </span>
        <span
          className={`rounded-md p-1 text-[10px] font-semibold ${status_style}`}
        >
          {status}
        </span>
      </div>
      <span className="text-[11px] font-semibold tracking-tight text-gray-600">
        Use this personalized guide to get .......
      </span>
    </div>
  );
}

export default OrderCard;
