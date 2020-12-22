export const getUserState = (store) => store.users;

export const getUsersList = (store) =>
  getUserState(store) ? getUserState(store).users : [];

export const getUsersById = (store, id) =>
  getUsersList(store)
    ? getUsersList(store)?.users?.filter((user) => user.id == id)[0]
    : {};
