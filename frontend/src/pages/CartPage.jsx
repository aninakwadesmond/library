import CartItems from "../CartComponent/CartItems";
import CartNavigation from "../CartComponent/CartNavigation";
import OrderSummary from "../CartComponent/OrderSummary";
import Proceeding from "../CartComponent/Proceeding";
import SelectAll from "../CartComponent/SelectAll";
import BarNavigation from "../Components/BarNavigation";

function CartPage() {
  return (
    <div className="px-4 py-2">
      <CartNavigation />
      <BarNavigation />
      <Proceeding />
      <div className="flex w-full flex-col items-start justify-center gap-3 lg:grid lg:grid-cols-5 lg:gap-6">
        <div className="flex w-full flex-col items-start justify-center gap-2 lg:col-span-3">
          <SelectAll />
          <CartItems />
        </div>
        <div className="w-full lg:col-span-2">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
