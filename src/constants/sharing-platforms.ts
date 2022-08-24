import { QuickPickItem } from "vscode";
import ISharingPlatform from "../types/sharing-platform";

export const SHARING_PLATFORMS: ISharingPlatform[] = [
  {
    url: "https://wa.me/?text=",
    name: "Whatsapp",
  },
  {
    url: "https://teams.microsoft.com/l/chat/0/0?users=ailhan%40hepsiemlak.com",
    name: "Teams",
  },
];

export const QPPlatforms = (): QuickPickItem[] => {
  let extractedItems: QuickPickItem[] = SHARING_PLATFORMS.map((item) => {
    return {
      label: item.name,
    };
  });
  return [...extractedItems];
};
