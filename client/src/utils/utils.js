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
