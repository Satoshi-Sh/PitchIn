import { useState } from "react";
import { ApproveButton } from "./buttons/approve-button";
import { useAuth0 } from "@auth0/auth0-react";
import { checkApprovedByMe } from "../utils/utils";

const ItemCard = ({ item, memberCount, isBuy = false }) => {
  const {
    name,
    description,
    price,
    approveCount,
    store,
    approved_by,
    _id: itemId,
  } = item;
  const { user } = useAuth0();

  const [isApprovedByMe, setIsApprovedByMe] = useState(
    checkApprovedByMe(approved_by, user.sub)
  );
  const [count, setCount] = useState(approveCount);
  return (
    <div
      className={
        isBuy
          ? "border border-cyan-500 border-4 rounded-sm p-3 my-4 bg-slate-50"
          : "border rounded-sm p-3 my-4 bg-slate-50"
      }
    >
      <h5 className="italic text-xl">{name}</h5>
      <h6 className="italic">-${price}</h6>
      <p>{description}</p>
      <div className="flex justify-between items-center px-10">
        <div>
          Approved by {count}/{memberCount}
        </div>
        <div>
          {store.name} {store.location}
        </div>
      </div>
      {isApprovedByMe ? null : (
        <div className="text-center">
          <ApproveButton
            itemId={itemId}
            setCount={setCount}
            setIsApprovedByMe={setIsApprovedByMe}
          />
        </div>
      )}
    </div>
  );
};

export default ItemCard;
