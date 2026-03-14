import {
  faChevronLeft,
  faChevronRight,
  faLegal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Pagination() {
  return (
    <div className="flex-between mt-10 w-full flex-wrap gap-y-4">
      <ShowBySelect />
      <Paginate />
    </div>
  );
}

function Paginate() {
  return (
    <div className="flex-start gap-2">
      <Button icon={faChevronLeft} />
      {Array.from({ length: 5 }, (_, i) => i).map((num, index) => (
        <Button num={num} key={index} />
      ))}
      {/* <Button num={5} bg_active={true} /> */}
      {/* <Button num={1} /> */}
      <Button icon={faChevronRight} />
    </div>
  );
}

function Button({ bg_active, icon, num }) {
  return (
    <button
      className={`flex-placecenter h-7 w-7 rounded-md p-1 shadow ${bg_active ? "bg-orange-500 text-orange-100" : "bg-gray-300 text-gray-900"}`}
    >
      {icon ? (
        <FontAwesomeIcon icon={icon} className="text-sm text-gray-400" />
      ) : (
        num
      )}
    </button>
  );
}

function ShowBySelect() {
  return (
    <div className="flex-start gap-2">
      <p className="text-[12px] font-semibold tracking-tight text-gray-400 capitalize">
        Show
      </p>
      <input
        type="number"
        name="input"
        id=""
        className="flex-placecenter max-w-20 rounded-md border-0 bg-gray-200 px-2 py-1 text-sm font-semibold tracking-tight text-gray-600 shadow outline-0 placeholder:text-sm placeholder:font-semibold placeholder:tracking-tight placeholder:text-gray-500"
        placeholder="10"
      />
      <p className="text-[12px] font-semibold tracking-tight text-gray-400 capitalize">
        of 56 results
      </p>
    </div>
  );
}

export default Pagination;
