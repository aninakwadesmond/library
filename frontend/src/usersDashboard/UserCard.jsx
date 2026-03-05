import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserCard({ icon, heading, children, actionList }) {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-2 rounded-md px-2 py-3 shadow shadow-gray-400/20">
      <div className="flex w-full items-center justify-start gap-2">
        <FontAwesomeIcon icon={icon} className="text-[1.2rem] text-green-400" />
        <p className="text-[12px] font-bold text-gray-500 capitalize">
          {heading}
        </p>
      </div>
      <div className="flex w-full flex-col items-start justify-center gap-3">
        {children}
      </div>
      <div className="flex w-full items-center justify-end gap-x-2">
        {actionList.map((el, index) => (
          <p
            className="text-[10px] font-bold tracking-tight text-green-300"
            key={index}
          >
            {el}
          </p>
        ))}
      </div>
    </div>
  );
}

export default UserCard;
