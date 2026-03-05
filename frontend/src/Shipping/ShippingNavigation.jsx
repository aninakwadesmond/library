import CartNavigation from "../CartComponent/CartNavigation";
import ShippingCard from "./ShippingCard";

function ShippingNavigation() {
  return (
    <div className="w-full">
      <div className="grid w-full gap-4">
        <ShippingCard />
      </div>
    </div>
  );
}

export default ShippingNavigation;
