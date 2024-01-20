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
