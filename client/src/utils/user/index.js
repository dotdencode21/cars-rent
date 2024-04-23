export const getUserInitials = (username) => {
  if (!username?.length) return "";

  const [firstName, lastName] = username?.split(" ");

  return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
};
