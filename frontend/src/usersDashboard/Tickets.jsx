import { faGooglePay } from "@fortawesome/free-brands-svg-icons";

import { faCheck, faTicket, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Tickets({ heading, children, icon, head, bottom, order }) {
  return (
    <div
      className={`mb-10 flex w-full flex-col items-start justify-center gap-y-4 rounded-md bg-white px-3 py-4 shadow-md shadow-gray-600/20 ${order ? "-order-1" : ""}`}
    >
      <Ticket_Header icon={icon} title={head} />
      <Table_Container heading={heading}>{children}</Table_Container>
      <div className="mt-4 flex w-full items-center justify-end gap-2">
        {bottom.map((name_action) => (
          <p className="text-[10px] font-bold tracking-tight text-green-400">
            {name_action}
          </p>
        ))}
      </div>
    </div>
  );
}

function Table_Container({ heading, children }) {
  return (
    <div className="w-full overflow-hidden">
      <div className="thin-scrollbar overflow-auto pb-2">
        <table className="w-max min-w-full [&>tr]:py-4">
          <Table_Head heading={heading} />
          {children}
        </table>
      </div>
    </div>
  );
}

function Table_Head({ heading }) {
  return (
    <tr className="space-y-10 border-b-2 border-gray-100 pb-2.5 [&_th]:text-start [&_th]:text-[14px] [&_th]:font-bold [&_th]:tracking-tight [&_th]:text-gray-500 [&_th]:capitalize">
      {heading.map((obj) => {
        console.log("obj", obj, Object.keys(obj), Object.values(obj));
        return <th className={Object.values(obj)[0]}>{Object.keys(obj)[0]}</th>;
      })}

      {/* <th className="w-30">department</th>
      <th className="w-30">priority</th>
      <th className="w-30">date</th>
      <th className="w-30">ticket number</th>
      <th className="w-30">status</th> */}
    </tr>
  );
}

function Ticket_Header({ icon, title }) {
  return (
    <div className="flex w-full items-center justify-start gap-2">
      <FontAwesomeIcon
        icon={icon}
        className="text-[1.7rem] font-bold text-green-400"
      />
      <h3 className="text-[1.4rem] font-bold tracking-tight text-gray-500 capitalize">
        {title}
      </h3>
    </div>
  );
}

export default Tickets;
