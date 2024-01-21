export const checkApprovedByMe = (array, mySub) => {
  for (const user of array) {
    if ("sub" in user) {
      if (mySub === user.sub) {
        return true;
      }
    }
  }
  return false;
};

export const splitItems = (items, memberCount) => {
  const itemsToBuy = [];
  const itemsSuggested = [];
  for (let item of items) {
    if (item.approveCount === memberCount) {
      itemsToBuy.push(item);
    } else {
      itemsSuggested.push(item);
    }
  }
  return [itemsToBuy, itemsSuggested];
};

export const moveItemToBuy = (
  itemId,
  itemsSuggested,
  setItemsSuggested,
  setItemsToBuy
) => {
  // Find the index of the item in itemsSuggested
  const indexOfItem = itemsSuggested.findIndex((item) => item.id === itemId);

  if (indexOfItem !== -1) {
    // Remove the item from itemsSuggested
    const updatedSuggested = [
      ...itemsSuggested.slice(0, indexOfItem),
      ...itemsSuggested.slice(indexOfItem + 1),
    ];

    // Add the item to itemsToBuy
    const itemToMove = itemsSuggested[indexOfItem];
    console.log(itemToMove);
    itemToMove.approveCount++;
    setItemsSuggested(updatedSuggested);
    setItemsToBuy((prevItemsToBuy) => [...prevItemsToBuy, itemToMove]);
  }
};
