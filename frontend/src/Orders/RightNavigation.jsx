import { faMap, faMessage, faUser } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RightNavigation({data=[]}) {
  const {description='', email='', fullName='', orderedItems='', shippingAddress='', _id:id=''} = data
  return (
    <div className="mb-5 grid w-full grid-cols-2 gap-4 md:grid-cols-1">
      <div className="flex w-full flex-col items-start justify-center gap-2">
        <Notes header="Notes">
          <RawText text="No notes" />
        </Notes>

        <Notes header="customers">
          <Icon_text icon={faUser} text={fullName} />
          <Icon_text icon={faEnvelope} text={email} />
          <RawText text="Customer is tax-exempt" t_style="text-gray-900" />
        </Notes>

        <Notes header="Converdation summary ">
          <RawText text="There aren't any conversation in this folder" />
          <Bottom />
        </Notes>
      </div>
      <div className="w-full">
        <Notes header="contact information">
          <Icon_text icon={faMessage} text={email} />
          <RawText text="No order" t_style="text-gray-900" />
          <RawText text={shippingAddress.phoneNumber} />
          <div className="mt-3 flex w-full flex-col items-start justify-center">
            <RawText text="Shipping Address" t_style="text-gray-900" />
            <Icon_text icon={faUser} text={fullName} />
            <RawText text={shippingAddress.city} />
            <RawText text={shippingAddress.state} />
            <RawText text="United States" />
            <RawText text={shippingAddress.phoneNumber} />
            <Icon_text icon={faMap} text="View map" I_style="text-blue-600" />
            <RawText text={shippingAddress.zipCode} t_style="text-gray-900" />
            <RawText text={shippingAddress.shippingType} />
          </div>
        </Notes>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <button className="border-0 p-1 text-[13px] font-semibold tracking-tight text-blue-400 outline-0">
      Learn more
    </button>
  );
}
function Notes({ children, header }) {
  return (
    <div className="flex max-h-max w-full flex-col items-start justify-center gap-2 rounded-md border border-gray-200 px-3 py-2 shadow-md">
      <h3 className="text-[15px] font-bold tracking-tight text-gray-800 capitalize">
        {header}
      </h3>
      <div className="flex flex-col items-start justify-center gap-1">
        {children}
      </div>
    </div>
  );
}

function Icon_text({ icon, text, I_style }) {
  return (
    <div className="line-clamp-1 flex w-full items-center justify-start gap-2">
      <FontAwesomeIcon
        icon={icon}
        className={`text-[14px] ${I_style ? I_style : "text-gray-300"} `}
      />
      <RawText text={text} />
    </div>
  );
}
function RawText({ text, t_style, I_style }) {
  return (
    <p
      className={`text-[12px] font-semibold tracking-normal ${t_style || I_style ? t_style || I_style : "line-clamp-1 w-full text-gray-500"} `}
    >
      {text}
    </p>
  );
}

export default RightNavigation;
