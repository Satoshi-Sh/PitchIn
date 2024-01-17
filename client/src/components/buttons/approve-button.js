import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const ApproveButton = () => {
  return (
    <button className="border hover:bg-pink-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Approve
    </button>
  );
};
