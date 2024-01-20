import ItemCard from "./ItemCard";
import StoreCard from "./StoreCard";

const GroupComponent = ({ group }) => {
  const { name, items, stores, memberCount } = group;
  return (
    <div className="px-10">
      <h2 className="font-bold text-2xl">Welcome Back to {name}</h2>
      <h3 className="italic my-3">Registered Stores</h3>
      <div className="flex gap-4 flex-wrap justify-center my-3">
        {stores.map((store, index) => {
          return <StoreCard store={store} key={index} />;
        })}
      </div>
      <div className="text-left">
        <h3 className="italic font-semibold">Items to Buy</h3>
        <h3 className="italic font-semibold">Suggested Items</h3>
        {items.map((item, index) => {
          return <ItemCard item={item} key={index} memberCount={memberCount} />;
        })}
      </div>
    </div>
  );
};
export default GroupComponent;
