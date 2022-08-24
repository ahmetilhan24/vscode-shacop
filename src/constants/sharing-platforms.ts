import { QuickPickItem } from "vscode";
import ISharingPlatform from "../types/sharing-platform";

export const SHARING_PLATFORMS: ISharingPlatform[] = [
  {
    url: "https://wa.me/?text=",
    name: "Whatsapp",
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
