import { useQuery } from "@tanstack/react-query";
import { USER_KEY } from "./queryKeys";
import { getUserById } from "../services/user";

/**
 * hook meant to fetch a user using react-query in order
 * to cache data and avoid unnecessary queries to be made
 * to firestore
 *
 * @param {String} userId of the user we want to fetch
 * @param {Object} options to be passed along to useQuery
 * @returns
 */
export const useUser = (userId: string, options = {}) => {
  return useQuery([USER_KEY, userId], () => getUserById(userId), options);
};
