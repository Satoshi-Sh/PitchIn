import { useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
export const ItemSubmit = ({ stores, groupId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const firstStore = stores[0];
  const { user } = useAuth0();
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
    storeId: firstStore._id,
  });
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    const { name, price, description, storeId } = formData;
    if (name === "" || price < 0 || description === "") {
      return window.alert("Please fill the form to submit");
    }
    const baseURL = process.env["REACT_APP_API_BASE_URL"];
    const response = await axios.post(`${baseURL}/api/item/add`, {
      sub: user.sub,
      groupId,
      storeId,
      name,
      price,
      description,
    });
    console.log(response);
    if (response.data.success) {
      console.log(response);
      window.location.reload();
    } else {
      e.preventDefault();
    }
  };
  if (isOpen) {
    return (
      <div>
        <form
          className="border p-3 w-[400px] mx-auto rounded-md"
          action="/dashboard"
        >
          <h3 className="italic m-3">Add New Item</h3>
          <label className="inline-block">
            Item:
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="ml-3"
              type="text"
              placeholder="Enter Item Name"
            />
          </label>
          <label className="inline-block mt-2">
            Price:
            <input
              name="price"
              value={formData.price}
              onChange={handleChange}
              type="number"
              step="0.01"
              min="0"
              className="ml-3"
            />
          </label>
          <label className="inline-block mt-3">
            Store:
            <select
              name="location"
              value={formData.storeId}
              onChange={handleChange}
              className="p-2 ml-3 border rounded-md"
            >
              {stores.map((store) => {
                return (
                  <option
                    value={store._id}
                    key={store._id}
                  >{`${store.name}-${store.location}`}</option>
                );
              })}
            </select>
          </label>
          <label className="block mt-3">
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="block w-full"
            />
          </label>
          <button
            onClick={handleSubmit}
            className="border mt-3 hover:bg-pink-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Item
          </button>
        </form>
        <button
          onClick={handleClick}
          className="block mx-auto underline text-2xl decoration-sky-300 hover:decoration-sky-500"
        >
          Cancel
        </button>
      </div>
    );
  }
  return (
    <button
      onClick={handleClick}
      className="underline text-2xl decoration-sky-300 hover:decoration-sky-500"
    >
      Submit Item
    </button>
  );
};
