import CartNavigation from "../CartComponent/CartNavigation";
import PayCart from "../Shipping/PayCart";
import ShippingNavigation from "../Shipping/ShippingNavigation";

function Shipping() {
  return (
    <div className="flex h-full w-full flex-col items-start justify-center gap-3 p-4">
      <CartNavigation />

      <div className="grid w-full lg:grid-cols-3 lg:gap-x-6">
        <div className="lg:col-span-2">
          <ShippingNavigation />
        </div>
        <div className="max-h-max">
          <PayCart />
        </div>
      </div>
    </div>
  );
}

export default Shipping;
