import { splitItems } from "../utils/utils";
import ItemCard from "./ItemCard";
import StoreCard from "./StoreCard";
import { ItemSubmit } from "./ItemSubmit";
import { useState } from "react";

const GroupComponent = ({ group }) => {
  const { name, items, stores, memberCount } = group;
  const [initialBuys, initialSuggests] = splitItems(items, memberCount);
  const [itemsToBuy, setItemsToBuy] = useState(initialBuys);
  const [itemsSuggested, setItemsSuggested] = useState(initialSuggests);
  return (
    <div className="px-10">
      <h2 className="font-bold text-2xl">Welcome Back to {name}</h2>
      <h3 className="italic my-3">Registered Stores</h3>
      <div className="flex gap-4 flex-wrap justify-center my-3">
        {stores.map((store, index) => {
          return <StoreCard store={store} key={index} />;
        })}
      </div>
      <div className="my-5">
        <ItemSubmit stores={stores} groupId={group._id} />
      </div>
      <div className="text-left">
        <h3 className="italic font-semibold">Items to Buy</h3>
        {itemsToBuy.map((item, index) => {
          return (
            <ItemCard
              item={item}
              key={item._id}
              memberCount={memberCount}
              isBuy={true}
            />
          );
        })}
        <h3 className="italic font-semibold">Suggested Items</h3>
        {itemsSuggested.map((item, index) => {
          return (
            <ItemCard
              item={item}
              key={item._id}
              memberCount={memberCount}
              itemsSuggested={itemsSuggested}
              setItemsToBuy={setItemsToBuy}
              setItemsSuggested={setItemsSuggested}
            />
          );
        })}
      </div>
    </div>
  );
};
export default GroupComponent;
