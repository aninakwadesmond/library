import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faBasketShopping,
  faMinus,
  faMoneyBill,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StarIcon } from "@heroicons/react/24/solid";
import Cards from "../HomeComponent/Cards";
import Card from "../Components/Card";

function ImageDetails() {
  return (
    <div className="w-full px-3">
      <div className="flex w-full flex-col items-start justify-center gap-2 px-3 py-4 md:gap-10 lg:grid lg:grid-cols-7 lg:gap-6">
        <div className="w-full lg:col-span-4">
          <ImageGalary />
        </div>
        <div className="w-full lg:col-span-3">
          <AboutDetails />
        </div>
      </div>
      <RelatedItems />
    </div>
  );
}

function AboutDetails() {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-3">
      <div className="flex w-full flex-col items-start justify-center">
        <div className="flex flex-col items-start justify-center">
          <p className="text-[12px] font-semibold tracking-tight text-gray-400 capitalize">
            Jeff Bussy
          </p>
          <h2 className="text-[1.8rem] font-bold tracking-tight text-gray-700 capitalize">
            Boa Fierce Jacket
          </h2>
        </div>
        <div className="flex items-center gap-2 bg-amber-100">
          <p className="font-semibold tracking-normal text-gray-500 line-through">
            $129.00
          </p>
          <p className="self-end text-[1.5rem] font-bold tracking-wide text-gray-900">
            $122.00
          </p>
          <span className="rounded-md bg-gray-950 p-1 px-2 text-center text-[12px] text-gray-300 shadow">
            5% Disc
          </span>
        </div>
        <div className="mt-2 flex items-center justify-start gap-2">
          <div className="flex items-center justify-start gap-2">
            {Array.from({ length: 5 }, (_, i) => (i = +1)).map((el) => (
              <StarIcon className="w-4 text-amber-200" />
            ))}
          </div>
          <p className="text-sm font-bold tracking-tight text-gray-400 capitalize">
            (4.9) 1.2K Revieews
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <h2 className="text-[14px] font-bold tracking-tight text-gray-800 capitalize">
          Descriptions
        </h2>
        <p className="line-clamp-4 text-[11px] font-bold text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
          incidunt quas delectus provident, doloremque culpa officiis corrupti
          sit unde adipisci omnis tempora. Reiciendis recusandae, similique
          voluptatibus numquam porro ullam voluptate. Minima sint deserunt
          facere. Corrupti similique inventore tempore, dolorum optio aspernatur
          sint nesciunt, ut quibusdam architecto suscipit nemo cupiditate illo
          doloribus, tempora voluptas recusandae et placeat aliquam. Fuga,
          molestiae asperiores. Commodi cumque earum nisi pariatur dolores
          repellendus iste, amet totam qui deserunt. Animi cum earum quae autem
          soluta cupiditate repudiandae repellendus. Distinctio laborum maxime
          fugiat provident expedita, quos sequi dignissimos?
        </p>
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <p className="font-bold tracking-tight capitalize">Versions</p>
        <div className="flex items-center justify-start gap-2">
          <Version version="v1" />
          <Version version="v2" />
          <Version version="v3" />
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-2">
        <Increment_Decrement icon={faMinus} />
        <input
          type="number"
          className="shatracking-wide w-40 appearance-none rounded-md bg-amber-50 px-4 text-center text-[16px] font-bold tracking-wide text-gray-600 outline-0"
          placeholder="0"
          onWheel={(e) => e.target.blur()}
        />
        <Increment_Decrement icon={faPlus} />
      </div>
      <div className="flex w-full items-center justify-between gap-4">
        <Button_Cart
          icon={faBasketShopping}
          name="Add to cart"
          color="bg-amber-100"
        />
        <Button_Cart
          icon={faMoneyBill}
          name="checkout"
          color="bg-amber-500/30"
        />
      </div>
    </div>
  );
}

function RelatedItems() {
  return (
    <div className="mt-10 flex w-full flex-col items-start justify-center gap-4">
      <p className="items-center justify-start font-bold tracking-normal text-gray-700">
        This item can be cool with this
      </p>
      <div className="grid w-full grid-cols-2 gap-3 justify-self-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {/* <Card /> */}
      </div>
    </div>
  );
}

function Button_Cart({ name, icon, color }) {
  return (
    <button
      className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-1 shadow ${color}`}
    >
      <FontAwesomeIcon icon={icon} className="text-orange-300" />
      <span className="text-[16px] font-semibold text-gray-600">{name}</span>
    </button>
  );
}

function Increment_Decrement({ icon }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-md bg-orange-300 p-2 shadow">
      <FontAwesomeIcon
        icon={icon}
        className="text-[16px] font-bold text-gray-50"
      />
    </div>
  );
}

function Version({ version }) {
  return (
    <label className="flex cursor-pointer items-center justify-start gap-1 text-[11px] text-gray-500">
      <input type="radio" name="version" value={version} />
      <span className="text-[12px] font-bold text-gray-400">{version}</span>
    </label>
  );
}

function ImageGalary() {
  return (
    <div className="flex w-full flex-col gap-1 md:grid md:grid-cols-6 lg:gap-2">
      <div className="w-full md:order-2 md:col-span-5">
        <SingleImage height="h-80 md:h-90 lg:h-100 " />
      </div>
      <div className="grid grid-cols-4 gap-2 md:order-1 md:h-80 md:grid-cols-1">
        <SingleImage height="h-20" rounded="rounded-0" />
        <SingleImage height="h-20" rounded="rounded-0" />
        <SingleImage height="h-20" rounded="rounded-0" />
        <SingleImage height="h-20" rounded="rounded-0" />
      </div>
    </div>
  );
}

function SingleImage({ height, rounded }) {
  return (
    <div
      className={`flex ${height} w-full flex-col items-center justify-center ${rounded ? rounded : "rounded-md"} bg-slate-200`}
    >
      <img
        src="/designs/book.jpg"
        alt="book image"
        className="h-[80%] max-w-[90%]"
      />
    </div>
  );
}
export default ImageDetails;
