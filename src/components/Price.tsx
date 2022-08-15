import { usePreviousPersistentState } from "../hooks/usePreviousPersistent";
import usePrevious from "../hooks/usePrevious";

const Price = ({ price }: { price: number }) => {
  const prevPrice = usePrevious(price);
  const icon = prevPrice && prevPrice < price ? "😡" : "😊";
  console.log("standardHook");
  return (
    <div>
      Current price: {price}; <br />
      Previous price: {prevPrice} {icon}
    </div>
  );
};

const PriceWithPersistent = ({ price }: { price: number }) => {
  const prevPrice = usePreviousPersistentState(price);
  const icon = prevPrice && prevPrice < price ? "😡" : "😊";
  console.log("PriceWithPersistent");
  return (
    <div>
      Current price: {price}; <br />
      Previous price: {prevPrice} {icon}
    </div>
  );
};

export { Price, PriceWithPersistent };
