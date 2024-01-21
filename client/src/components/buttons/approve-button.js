import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import axios from "axios";
import { moveItemToBuy } from "../../utils/utils";

export const ApproveButton = ({
  setIsApprovedByMe,
  itemsSuggested,
  setItemsSuggested,
  setItemsToBuy,
  setCount,
  count,
  memberCount,
  itemId,
}) => {
  const { user } = useAuth0();
  const handleClick = async () => {
    try {
      // Backend Update
      const baseURL = process.env["REACT_APP_API_BASE_URL"];
      const response = await axios.put(`${baseURL}/api/item/approve`, {
        sub: user.sub,
        itemId: itemId,
      });
      if (memberCount === count + 1) {
        moveItemToBuy(itemId, itemsSuggested, setItemsSuggested, setItemsToBuy);
      } else {
        setIsApprovedByMe((prev) => true);
        setCount((prev) => prev + 1);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <button
      onClick={handleClick}
      className="border hover:bg-pink-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Approve
    </button>
  );
};
