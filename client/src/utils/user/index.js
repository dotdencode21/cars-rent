export const getUserInitials = (username) => {
  const [firstName, lastName] = username?.split(" ");

  return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
};
