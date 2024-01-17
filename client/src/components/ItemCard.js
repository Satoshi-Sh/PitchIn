import { ApproveButton } from "./buttons/approve-button";
const ItemCard = ({ item, memberCount }) => {
  const { name, description, price, approveCount } = item;
  return (
    <div className="border rounded-sm p-3 my-4 bg-slate-50">
      <h5>{name}</h5>
      <h6>${price}</h6>
      <p>{description}</p>
      <div className="flex justify-between items-center px-10">
        <h6>
          Approved by {approveCount}/{memberCount}
        </h6>
        <ApproveButton />
      </div>
    </div>
  );
};

export default ItemCard;
