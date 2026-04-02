import { faEdit, faNavicon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OrderHeader({data }) {
  const {_id:id} = data; 
  return (
    <div className="flex w-full flex-col items-center justify-start gap-2">
      <div className="flex w-full items-start justify-between">
        <div className="flex flex-col items-start justify-start">
          <div className="flex items-center justify-start gap-2">
            <p className="text-[13px] font-bold tracking-tight text-gray-600 capitalize">
              Order ID: #{`${id||'no order Id'}`}
            </p>
            <Status
              text="Payment pending"
              text_color="text-yellow-600"
              bg_color="bg-yellow-50"
            />
            <Status
              text="Undefined"
              text_color="text-red-600"
              bg_color="bg-red-50"
            />
          </div>
          <p className="text-[12px] font-semibold tracking-tight text-gray-400 capitalize">
            January 12, 2024 at 10:30 pm from Draft Orders
          </p>
        </div>
        <div className="flex items-center justify-start">
          <p className="md:hidden">
            <FontAwesomeIcon
              icon={faNavicon}
              className="cursor-pointer text-[17px] font-semibold text-gray-400"
            />
          </p>
          <div className="hidden items-center justify-start gap-2 md:flex">
            <TopButton name_action="Restock" />
            <TopButton name_action="Edit" icon={faEdit} />
            <TopButton name_action="more action" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TopButton({ name_action, icon }) {
  return (
    <button className="flex cursor-pointer items-center justify-start gap-1 rounded-md border-0 bg-gray-100 p-1 text-[12px] font-semibold tracking-tight text-gray-400 capitalize shadow outline-0">
      {icon && <FontAwesomeIcon icon={icon} />}
      {name_action}
    </button>
  );
}

function Status({ text, text_color, bg_color }) {
  return (
    <p
      className={`rounded-sm ${bg_color} p-1 font-semibold tracking-tighter ${text_color} text-[10px] font-semibold`}
    >
      {text}
    </p>
  );
}

export default OrderHeader;
