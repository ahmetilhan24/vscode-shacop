import { ExtensionContext } from "vscode";
import { users } from "../storage/users";

export const initStorage = async (context: ExtensionContext) => {
  const storedUsers = await initUserStorage(context);
  if (storedUsers) {
    // @ts-ignore
    storedUsers.forEach((user) => {
      users.push(user);
    });
  }
};
const initUserStorage = async (context: ExtensionContext) => {
  return getStorage(context, "users");
};

export const getStorage = async (context: ExtensionContext, key: string) => {
  return context.globalState.get(key);
};

export const setStorage = async (
  context: ExtensionContext,
  key: string,
  payload: object
) => {
  return context.globalState.update(key, payload);
};
