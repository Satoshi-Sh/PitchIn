import React from "react";
import axios from "axios";

export const PurchasedButton = ({ itemId, groupId }) => {
  const handleClick = async (e) => {
    const baseURL = process.env["REACT_APP_API_BASE_URL"];
    const response = await axios.delete(`${baseURL}/api/item/remove`, {
      data: {
        groupId,
        itemId,
      },
    });
    if (response.data.success) {
      window.location.reload();
    } else {
      e.prevent.default();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="border hover:bg-pink-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Purchased
    </button>
  );
};
