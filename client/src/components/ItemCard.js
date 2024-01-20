import { useState } from "react";
import { ApproveButton } from "./buttons/approve-button";
import { useAuth0 } from "@auth0/auth0-react";
import { checkApprovedByMe } from "../utils/utils";
const ItemCard = ({ item, memberCount }) => {
  const { name, description, price, approveCount, store, approved_by } = item;
  const { user } = useAuth0();

  const [isApprovedByMe, setIsApprovedByMe] = useState(
    checkApprovedByMe(approved_by, user.sub)
  );
  return (
    <div className="border rounded-sm p-3 my-4 bg-slate-50">
      <h5 className="italic text-xl">{name}</h5>
      <h6 className="italic">-${price}</h6>
      <p>{description}</p>
      <div className="flex justify-between items-center px-10">
        <div>
          Approved by {approveCount}/{memberCount}
        </div>
        <div>
          {store.name} {store.location}
        </div>
      </div>
      {isApprovedByMe ? null : (
        <div className="text-center">
          <ApproveButton />
        </div>
      )}
    </div>
  );
};

export default ItemCard;
